import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiverComplimentController } from "./controllers/ListUserReceiverComplimentController";
import { ListUserSenderComplimentController } from "./controllers/ListUserSenderComplimentController";
import { ensure } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverController = new ListUserReceiverComplimentController();
const listUserSenderController = new ListUserSenderComplimentController();
const listTagController = new ListTagController();
const listUserController = new ListUserController()

router.post('/users', createUserController.handle);
router.post('/tags', ensureAuthenticated, ensure, createTagController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);

router.get('/tags', listTagController.handle);
router.get('/user/compliments/receiver', ensureAuthenticated, listUserReceiverController.handle);
router.get('/user/compliments/sender', ensureAuthenticated, listUserSenderController.handle);
router.get('/users', ensureAuthenticated, listUserController.handle);
export { router }