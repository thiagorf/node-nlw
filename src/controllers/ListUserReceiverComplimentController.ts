import { Request, Response } from 'express'
import { ListUserReceiverService } from '../services/ListUserReceiverService'

class ListUserReceiverComplimentController {
	async handle(request: Request, response: Response)
	{
		const listUserReceiverCompliment = new ListUserReceiverService();

		const { user_id } = request;

		const userReceiverCompliments = await listUserReceiverCompliment.execute(user_id);

		return response.json(userReceiverCompliments);
	}
}

export { ListUserReceiverComplimentController }