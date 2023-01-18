import { Router } from 'express';
import { check } from 'express-validator';
import { createController, getAllController, getByIdController, updateController, deleteController } from '../controller/controller.task';
import { validateErrors } from '../helpers/getErrorsbyExpressValidator';

const router = Router();

router.post('/create',
    [
        check('name', 'Name must be a valid string').exists().notEmpty().isString(),
        check('fastDescription', 'fastDescription must be a valid description').exists().notEmpty().isString(),
        check('explicativeText', 'explicativeText must be a valid string').exists().notEmpty().isString(),
        check('initDate', 'Must be a valid date').exists().notEmpty().isDate(),
        check('finishDate', 'Must be a valid date').exists().notEmpty().isDate(),
        check('relevanceLabel').exists().notEmpty().isString().isIn(['less important', 'medium important', 'very important']),
        validateErrors
    ],
    createController);

router.get('/get-all', getAllController);

router.get('/get/:id',

    getByIdController);

router.put('/update/:id',
    [
        check('name', 'Name must be a valid string').exists().notEmpty().isString(),
        check('fastDescription', 'fastDescription must be a valid description').exists().notEmpty().isString(),
        check('explicativeText', 'explicativeText must be a valid string').exists().notEmpty().isString(),
        check('initDate', 'Must be a valid date').exists().notEmpty().isDate(),
        check('finishDate', 'Must be a valid date').exists().notEmpty().isDate(),
        check('relevanceLabel').exists().notEmpty().isString().isIn(['less important', 'medium important', 'very important']),
        validateErrors
    ],
    updateController);

router.delete('/delete/:id',

    deleteController);

export default router;