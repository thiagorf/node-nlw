import { Router } from "express";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensure } from "./middlewares/ensureAdmin";

const router = Router();

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post('/users', createUserController.handle);
router.post('/tags', ensure, createTagController.handle)

export { router }