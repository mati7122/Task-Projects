import { Router } from 'express';
import { param } from 'express-validator';
import { getAllControllerAdmin, restoreControllerAdmin, deleteControllerAdmin } from '../controller/controller.admin.task';

const router = Router();

router.get('/get-all', getAllControllerAdmin);

router.put('/restore/:id',
    param('id').isNumeric(),
    restoreControllerAdmin);

router.delete('/delete/:id',
    param('id').isNumeric(),
    deleteControllerAdmin);

export default router;