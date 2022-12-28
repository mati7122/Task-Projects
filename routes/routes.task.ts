import { Router } from 'express';
import { createController, getAllController, getByIdController, updateController, deleteController } from '../controller/controller.task';

const router = Router();

router.post('/create', createController);

router.get('/get-all', getAllController);

router.get('/get/:id', getByIdController);

router.put('/update/:id', updateController);

router.delete('/delete/:id', deleteController);

export default router;