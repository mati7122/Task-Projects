import { Router, Request, Response } from 'express';
import { createController, getAllController, logInController } from '../controller/controller.user';

const router = Router();

router.get('/get-all', getAllController);
router.post('/signin', createController);
router.post('/login', logInController);

export default router;

// router.post('/forget', forgetPasswordOrUserNameController);

