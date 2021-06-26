import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";


class ListUserReceiverService {
	async execute(user_id: string)
	{
		const complimentRepositories = getCustomRepository(ComplimentRepositories);

		const compliments = await complimentRepositories.find({
			where: {
				user_receiver: user_id
			}
		});

		return compliments;
	}
}

export { ListUserReceiverService }