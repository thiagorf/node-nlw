import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories";


class ListUserSenderService {
	async execute(user_id: string)
	{
		const complimentRepositories = getCustomRepository(ComplimentRepositories);

		const compliments = await complimentRepositories.find({
			where: {
				user_sender: user_id
			},
			relations: ['userSender', 'userReceiver', 'tag']
		});

		return compliments;
	}
}

export { ListUserSenderService }