import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { getFeature, getAction } from '@oktein/crud';

@Injectable()
export class ACLGuard implements CanActivate {
  private readonly logger: Logger = new Logger(this.constructor.name);

  canActivate(ctx: ExecutionContext): boolean {
    const handler = ctx.getHandler();
    const controller = ctx.getClass();
    const feature = getFeature(controller);
    const action = getAction(handler);
    this.logger.verbose(`${feature}-${action}`);
    return true;
  }
}
