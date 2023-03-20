import {HttpStatus, Injectable, Logger} from '@nestjs/common';
import {CreateUserDto, LocalLoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import { UsersRepository } from './users.repository';
import { User } from '@nest-microservice-kafka/shared/entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {ProfileResponse} from "@nest-microservice-kafka/shared/dto";
import { compareSync } from 'bcrypt';
import {BaseException, UserNotFoundException} from '@nest-microservice-kafka/shared/exception';
import {isDefined} from "class-validator";
import { compare, hash } from 'bcrypt';
import {LoginResponse} from "../../../../libs/shared/src/lib/dto/user/login.response.dto";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly usersRepository: UsersRepository,
              private readonly jwtService: JwtService,
              @InjectRepository(User)
              private readonly userRepository: Repository<User>,) {}

  getData(): { message: string } {
    return { message: 'Welcome to user!' };
  }
  async createUser(data: CreateUserDto) {
    try {
      const user = new User()
      user.email = data.email;
      user.fullName = data.fullName;
      const result = await this.userRepository.save(user);
      this.logger.warn(result)
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
    loginRequest: LocalLoginRequest,
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

  async getUser(id: string)  {
    const user =  await this.userRepository.findOne({
      where: {
        id,
      }
    });
    this.logger.warn(JSON.stringify(user));
    return user;

  }

  public generateUserJwtToken(user: User): string {
    return this.jwtService.sign({ sub: user.id, cometToken: user.cometToken });
  }

}
