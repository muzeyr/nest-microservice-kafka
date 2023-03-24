import { IsNotEmpty } from 'class-validator';

export class DeactivateUserRequest {
  @IsNotEmpty()
  deactivationReason: string;
}
