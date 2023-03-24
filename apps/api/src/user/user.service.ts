import {Inject, Injectable, Logger, OnModuleDestroy, OnModuleInit} from '@nestjs/common';
import {
  ProductEvent,
  ServiceName,
  UserEvent,
} from '@nest-microservice-kafka/shared/enum';
import { ClientKafka } from '@nestjs/microservices';
import {CreateUserDto, LoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import {User} from "@nest-microservice-kafka/shared/entity";
import { lastValueFrom } from 'rxjs';
import {ExceptionHandler} from "@nestjs/core/errors/exception-handler";

@Injectable()
export class UserService implements OnModuleInit,OnModuleDestroy  {

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(
    @Inject(ServiceName.USER_MICROSERVICE)
    private readonly authClient: ClientKafka
  ) {
  }

  async onModuleInit() {
    this.authClient.subscribeToResponseOf(UserEvent.USER_BY_ID);
    this.authClient.subscribeToResponseOf(UserEvent.USER_CREATE);
    this.authClient.subscribeToResponseOf(UserEvent.USER_LOGIN);
    await this.authClient.connect();

  }


  async create(createUserDto: CreateUserDto) {
    return await lastValueFrom(this.authClient.send(UserEvent.USER_CREATE,JSON.stringify(createUserDto)));
  }
  changePassword(user: User,updatePasswordRequest: UpdatePasswordRequest) {
    updatePasswordRequest.user = user;
    return this.authClient.emit(UserEvent.USER_UPDATE_PASSWORD, JSON.stringify(updatePasswordRequest));
  }

  async login(login: LoginRequest){
    return await lastValueFrom(this.authClient.send(UserEvent.USER_LOGIN, JSON.stringify(login)));
  }

  async getUserById(id: string){
    return await lastValueFrom(this.authClient.send(UserEvent.USER_BY_ID, JSON.stringify({ userId: id })));
  }

  async onModuleDestroy() {
    await this.authClient.close();
  }
  async getByIdWithCaching(id: string) {
    const user = await this.getUserById(id);
    if (!user) {
      throw new ExceptionHandler();
    }
    return user;
  }
}
