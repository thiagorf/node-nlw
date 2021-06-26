import { getCustomRepository } from 'typeorm';
import { UserRepositories } from "../repositories/UserRepositories";
import { hash } from 'bcryptjs';

interface IUserRequest {
	name: string,
	email: string,
	password: string,
	admin?: boolean
}

class CreateUserService{
	async execute({name, email, password, admin }: IUserRequest)
	{
		const userRepositories = getCustomRepository(UserRepositories);

		if(!email) {
			throw new Error("Email incorrect");
		}

		const userAlreadyExists = await userRepositories.findOne({
			email
		});

		const passwordHash = await hash(password, 8);

		if(userAlreadyExists) {
			throw new Error("User already exists");
		}

		const user = userRepositories.create({
			name,
			email,
			password: passwordHash,
			admin
		});

		await userRepositories.save(user);

		return user;
	}
}

export { CreateUserService }