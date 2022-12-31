import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';
import { UsersRepository } from './users.repository';
import { User } from '@nest-microservice-kafka/shared/entity';

@Injectable()
export class AppService {
  constructor(private readonly usersRepository: UsersRepository) {}

  getData(): { message: string } {
    return { message: 'Welcome to user-microservice!' };
  }
  createUser(data: CreateUserDto): void {
    this.usersRepository.save(data);
  }

  getUser(id: number): User {
    return this.usersRepository.findOne(id);
  }
}
