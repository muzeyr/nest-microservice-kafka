import { Inject, Injectable } from '@nestjs/common';
import {
  ProductEvent,
  ServiceName,
  UserEvent,
} from '@nest-microservice-kafka/shared/enum';
import { ClientKafka } from '@nestjs/microservices';
import {CreateUserDto, LocalLoginRequest, UpdatePasswordRequest} from '@nest-microservice-kafka/shared/dto';
import {User} from "@nest-microservice-kafka/shared/entity";

@Injectable()
export class UserService {
  constructor(
    @Inject(ServiceName.USER_MICROSERVICE)
    private readonly authClient: ClientKafka
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.authClient.emit(UserEvent.USER_CREATE, JSON.stringify(createUserDto));
  }
  changePassword(user: User,updatePasswordRequest: UpdatePasswordRequest) {
    updatePasswordRequest.user = user;
    return this.authClient.emit(UserEvent.USER_UPDATE_PASSWORD, JSON.stringify(updatePasswordRequest));
  }

  login(login: LocalLoginRequest){
    return this.authClient.emit(UserEvent.USER_LOGIN, JSON.stringify(login));
  }

  getUserById(id: string){
    return this.authClient.emit(UserEvent.USER_BYID, id);
  }

}
