import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from 'src/services/user/user.service';
import { UserDto } from 'src/dtos/user/user.dto';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('user')
@Controller('user')
export class UserController {

  constructor(
		private readonly userService: UserService
	) {}

	@Get()
	@ApiBearerAuth()
	getHello(): string {
	  return this.userService.getHello();
	}

	@Post()
	async createUser(@Body() UserDto: UserDto) {
		return this.userService.create(UserDto);
	}
}
