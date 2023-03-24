import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/***
 * Jwt Authentication Guard Implementation With Db Lookup Auth Guard
 */
@Injectable()
export default class JwtAuthenticationGuard extends AuthGuard('jwt') {}
