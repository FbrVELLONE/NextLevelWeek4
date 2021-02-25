import { Router } from 'express';
import { UserController } from './controllers/UserController';
import { SurveyController } from './controllers/SurveyController';
import { SendEmailController } from './controllers/SendEmailController';

const router = Router();

const userController = new UserController();
const surveysController = new SurveyController();

const sendMailController = new SendEmailController();

router.post("/users", userController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/sendMail", sendMailController.execute);

export { router };