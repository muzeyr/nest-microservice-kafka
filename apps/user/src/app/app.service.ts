import {Injectable, Logger} from '@nestjs/common';
import { CreateUserDto } from '@nest-microservice-kafka/shared/dto';
import { UsersRepository } from './users.repository';
import { User } from '@nest-microservice-kafka/shared/entity';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class AppService {

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(private readonly usersRepository: UsersRepository,
              @InjectRepository(User)
              private readonly userRepository: Repository<User>,) {}

  getData(): { message: string } {
    return { message: 'Welcome to user!' };
  }
  async createUser(data: CreateUserDto) {
    try {
      const result = await this.userRepository.save(data);
      this.logger.warn(result)
      return result;
    }catch (e) {
      this.logger.error(e)
    }
  }

  getUser(id: string): User {
    return this.usersRepository.findOne(id);
  }
}
