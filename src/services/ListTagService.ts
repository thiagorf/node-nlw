import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/TagRepositories";
import { classToPlain } from 'class-transformer';



class ListTagService {
	async execute()
	{
		const tagsRepositories = getCustomRepository(TagRepositories);

		const tags = await tagsRepositories.find();

		//Deveria ter achado isso antes, facilita na hora de exibir um valor monetario
		//tags = tags.map(tag => ({...tag, customName: `#${tag.name}`}))

		return classToPlain(tags);
	}
}

export { ListTagService }