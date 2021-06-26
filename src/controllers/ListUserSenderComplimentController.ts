import { Request, Response } from 'express'
import { ListUserSenderService } from '../services/ListUserSenderService'

class ListUserSenderComplimentController {
	async handle(request: Request, response: Response)
	{
		const listUserSenderCompliment = new ListUserSenderService();

		const { user_id } = request;

		const userSenderCompliments = await listUserSenderCompliment.execute(user_id);

		return response.json(userSenderCompliments);
	}
}

export { ListUserSenderComplimentController }