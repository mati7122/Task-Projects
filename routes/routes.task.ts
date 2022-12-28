import { Router } from 'express';
import { body, param } from 'express-validator';
import { createController, getAllController, getByIdController, updateController, deleteController } from '../controller/controller.task';

const router = Router();

router.post('/create',
    body('name').exists().notEmpty().isString(),
    body('fastDescription').exists().notEmpty().isString(),
    body('explicativeText').exists().notEmpty().isString(),
    body('initDate').exists().notEmpty().isString(),
    body('finishDate').exists().notEmpty().isString(),
    body('relevanceLabel').exists().notEmpty().isString(),
    createController);

router.get('/get-all', getAllController);

router.get('/get/:id',
    param('id').exists().notEmpty().isNumeric(),
    getByIdController);

router.put('/update/:id', updateController);

router.delete('/delete/:id',
    param('id').exists().notEmpty().isNumeric(),
    deleteController);

export default router;