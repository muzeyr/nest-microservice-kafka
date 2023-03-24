import { ApiProperty } from '@nestjs/swagger';

export class FacebookResponse {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  last_name: string;
  @ApiProperty()
  first_name: string;
  @ApiProperty()
  middle_name: string;
}

export class ChangePasswordResponse {
  @ApiProperty()
  email: string;
}
