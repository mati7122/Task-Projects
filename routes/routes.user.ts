import { Router, Request, Response } from 'express';
import { createController } from '../controller/controller.user';

const router = Router();

router.post('/signin', createController);
// router.post('/login', logInController);
// router.post('/forget', forgetPasswordOrUserNameController);

