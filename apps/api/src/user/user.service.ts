import { Inject, Injectable } from '@nestjs/common';
import {
  ProductEvent,
  ServiceName,
  UserEvent,
} from '@nest-microservice-kafka/shared/enum';
import { ClientKafka } from '@nestjs/microservices';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';

@Injectable()
export class UserService {
  constructor(
    @Inject(ServiceName.USER_MICROSERVICE)
    private readonly authClient: ClientKafka
  ) {}

  create(createUserDto: CreateUserDto) {
    this.authClient.emit(UserEvent.USER_CREATE, JSON.stringify(createUserDto));
  }
}
