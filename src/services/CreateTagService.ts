import { getCustomRepository } from 'typeorm';
import { TagRepositories } from '../repositories/TagRepositories'; 

interface ITag {
	name: string
}

class CreateTagService {
	async execute({name}: ITag)
	{
		const tagRepositories = getCustomRepository(TagRepositories);
		
		if(!name){
			throw new Error("It's empty");
		}

		const tagAlreadyexists = await tagRepositories.findOne({name});

		if(tagAlreadyexists) {
			throw new Error("Compliment already exist");
		}

		const tag = tagRepositories.create({name});

		await tagRepositories.save(tag);

		return tag;
	}
}

export { CreateTagService }