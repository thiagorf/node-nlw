import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"

import { compare } from 'bcryptjs';

import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
	email: string,
	password: string
}

class AuthenticateUserService {
	async execute({email, password}: IAuthenticateRequest)
	{
		const userRepositories = getCustomRepository(UserRepositories);

		//Verificar se o email existe
		const user = await userRepositories.findOne({email});

		if(!user) {
			throw new Error("Email/Password incorrect");
		}

		//Verificar se a senha esta correta
		const passwordMatch = await compare(password, user.password);

		if(!passwordMatch) {
			throw new Error("Email/Password incorrect");
		}

		const token = sign({
			email: user.email
		}, 
			"22d64c11160598b72338262e4515a8af", 
		{
			subject: user.id,
			expiresIn: "1d"
		});

		return token;
	}
}

export { AuthenticateUserService }