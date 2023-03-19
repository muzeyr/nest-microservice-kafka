import { Injectable } from '@nestjs/common';
import { User } from '@nest-microservice-kafka/shared/entity';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersRepository {
  private readonly users: User[] = [];

  save(createUserDto: CreateUserDto) {
    const user = this.populateUser(createUserDto);
    this.users.push(user);
  }

  findOne(id: string) {
    return this.users.find((u) => u.id === id) || null;
  }
  populateUser(createUserDto: CreateUserDto): User {
    const user = new User();
    user.id = randomUUID();
    user.fullName = createUserDto.fullName;
    user.email = createUserDto.email;
    user.createdAt = new Date();
    return user;
  }
}
