import {Request, Response, NextFunction} from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

export async function ensure(request: Request, response: Response, next: NextFunction){
	const { user_id } = request

	const userRepositories = getCustomRepository(UserRepositories);

	const user = await userRepositories.findOne(user_id);

	if (user?.admin) {
		return next();
	}

	return response.status(401).json({error: "User is not admin"});
}