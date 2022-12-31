import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteProductDto {
  @IsNotEmpty()
  id: string;
}
