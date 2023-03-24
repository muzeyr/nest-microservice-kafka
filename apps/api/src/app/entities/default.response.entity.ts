import {
  ApiBearerAuth,
} from '@nestjs/swagger';
import {
  applyDecorators,
  ClassSerializerInterceptor,
  Type,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import JwtAuthenticationGuard from "../authentication/strategy/jwt-authentication.guard";

export function UseDefaultSecurity() {
  return applyDecorators(
    ApiBearerAuth(),
    UseGuards(JwtAuthenticationGuard),
    UseInterceptors(ClassSerializerInterceptor),
  );
}
