import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
	@ApiProperty()
	firstName: String;
	@ApiProperty()
	lastName: String;
	@ApiProperty()
	email: String;
	@ApiProperty()
	uidFirebase: String;
}