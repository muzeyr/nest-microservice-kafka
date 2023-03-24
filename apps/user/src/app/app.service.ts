import {HttpStatus, Inject, Injectable, Logger, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {CreateUserDto, LoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import { UsersRepository } from './users.repository';
import { User } from '@nest-microservice-kafka/shared/entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProfileResponse} from "@nest-microservice-kafka/shared/dto";
import { compareSync } from 'bcrypt';
import {BaseException, UserNotFoundException} from '@nest-microservice-kafka/shared/exception';
import {isDefined} from "class-validator";
import {LoginResponse} from "../../../../libs/shared/src/lib/dto/user/login.response.dto";
import { JwtService } from '@nestjs/jwt';
import {ProductEvent, ServiceName, UserEvent} from "@nest-microservice-kafka/shared/enum";
import {ClientKafka} from "@nestjs/microservices";
import { getRounds, hash,compare } from 'bcrypt';
@Injectable()
export class AppService    {

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(
              @Inject(ServiceName.USER_MICROSERVICE)
              private readonly authClient: ClientKafka,
              private readonly usersRepository: UsersRepository,
              private readonly jwtService: JwtService,
              @InjectRepository(User)
              private readonly userRepository: Repository<User>,) {}


  getData(): { message: string } {
    return { message: 'Welcome to user!' };
  }
  async createUser(data: CreateUserDto) {
    try {
      const user = new User();
      user.email = data.email;
      user.fullName = data.fullName;
      user.password = await hash(data.password, 10);
      const result = await this.userRepository.save(user);
      return result;
    }catch (e) {
      this.logger.error(e)
    }
  }

  async changeUserPassword(
    updatePasswordRequest: UpdatePasswordRequest,
  ): Promise<ProfileResponse> {
    if (compareSync(updatePasswordRequest.password, updatePasswordRequest.user.password)) {
      updatePasswordRequest.user.password = updatePasswordRequest.newpassword;
      await this.userRepository.save(updatePasswordRequest.user);
      const profileResponse = new ProfileResponse();
      profileResponse.user = updatePasswordRequest.user;
      return profileResponse;
    }
    throw new UserNotFoundException();
  }
  async login(
    loginRequest: LoginRequest,
  ): Promise<ProfileResponse> {
    const user = await this.userRepository.findOne({
      where:{
        email: loginRequest.email,
      }
    })
    if(!isDefined(user)){
      throw new BaseException(
        'Uh oh. Are you sure? Check your email or password.',
        HttpStatus.BAD_REQUEST,
      );
    }
    const isPasswordMatching = await compare(
      loginRequest.password,
      user.password,
    );
    if (!isPasswordMatching) {
      throw new BaseException(
        'Uh oh. Are you sure? Check your email or password.',
        HttpStatus.BAD_REQUEST,
      );
    }
    user.password = undefined;
    const loginResponse = new LoginResponse();
    loginResponse.accessToken = this.generateUserJwtToken(user);
    loginResponse.user = user;
    return loginResponse;
  }

  async getUser(id: string): Promise<User>  {
    return await this.userRepository.findOne({
      where: {
        id,
      }
    });
  }

  public generateUserJwtToken(user: User): string {
    return this.jwtService.sign({ sub: user.id, cometToken: user.cometToken });
  }

}
