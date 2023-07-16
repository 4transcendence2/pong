import { IsNotEmpty, IsString, Matches } from 'class-validator'

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	readonly username: string;

	@IsString()
	@IsNotEmpty()
	readonly intraId: string;
}