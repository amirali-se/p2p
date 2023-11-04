import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user/user.interface';
import { UserDto } from 'src/dtos/user/user.dto';

@Injectable()
export class UserRepositoy {
	constructor(
		@Inject('USER_MODEL') private readonly userModel: Model<UserInterface>
	) {}

	async create(createUserDto: UserDto) {
		return await this.userModel.create(createUserDto);
	}
}