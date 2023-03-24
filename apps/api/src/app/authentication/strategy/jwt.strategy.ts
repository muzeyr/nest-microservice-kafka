import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { TokenPayload } from '../tokenPayload';
import {AppConfigService} from "@nest-microservice-kafka/shared/config";
import {UserService} from "../../../user/user.service";

/***
 * Jwt Strategy With Db Lookup Auth Guard And User Last User Activity Updates
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UserService,
    private readonly configService: AppConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.jwtSecret,
    });
  }

  async validate(payload: TokenPayload) {
    const user = await this.userService.getByIdWithCaching(payload.sub);
    return user;
  }
}
