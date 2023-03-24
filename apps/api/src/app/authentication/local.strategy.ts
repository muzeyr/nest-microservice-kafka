import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { LocalLoginRequest } from './dto/localloginrequest.dto';
import {User} from "@nest-microservice-kafka/shared/entity";
import {UserService} from "../../user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService,
  ) {
    super({
      usernameField: 'email',
    });
  }
  async validate(email: string, password: string): Promise<User> {
    const localLoginRequest = new LocalLoginRequest();
    localLoginRequest.email = email;
    localLoginRequest.password = password;
    const result = await this.userService.login(
      localLoginRequest,
    );
    return result.user;
  }
}
