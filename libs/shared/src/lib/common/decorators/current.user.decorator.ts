import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../../entities/user.entity';

export const CurrentUser = createParamDecorator<
  unknown,
  ExecutionContext,
  User
>((_, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});

export const ClientVersion = createParamDecorator<
  unknown,
  ExecutionContext,
  User
>((_, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.headers['x-app-version'];
});

export const DeviceId = createParamDecorator<unknown, ExecutionContext, User>(
  (_, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.headers['x-device-id'];
  },
);

