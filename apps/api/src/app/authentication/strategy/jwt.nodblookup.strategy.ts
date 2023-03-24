import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { TokenPayload } from '../tokenPayload';
import { AuthGuard } from '@nestjs/passport';
import {User} from "@nest-microservice-kafka/shared/entity";
import {AppConfigService} from "@nest-microservice-kafka/shared/config";

@Injectable()
export class JwtNoDbLookupStrategy extends PassportStrategy(
  Strategy,
  'jwtnolookup',
) {
  constructor(private readonly configService: AppConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.jwtSecret,
    });
  }

  async validate(payload: TokenPayload) {
    return new User({ id: payload.sub });
  }
}

@Injectable()
export default class JwtNoDbLookupGuard extends AuthGuard('jwtnolookup') {}
