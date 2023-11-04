import { Injectable } from '@nestjs/common';
import { UserRepositoy } from 'src/repositories/user/user.repository';
import { UserDto } from 'src/dtos/user/user.dto';
import { UserInterface } from 'src/interfaces/user/user.interface';
@Injectable()
export class UserService {

	constructor(
		private readonly userRepository: UserRepositoy
	) {}


	getHello(): string {
		return 'Hello User!';
	}
	async create(UserDto: UserDto) {
		return await this.userRepository.create(UserDto);
	}
}
