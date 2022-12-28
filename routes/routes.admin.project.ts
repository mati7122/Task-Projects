import { Router } from 'express';
import { getAllControllerAdmin, restoreControllerAdmin, deleteControllerAdmin } from '../controller/controller.admin.task';

const router = Router();

router.get('/get-all', getAllControllerAdmin);

router.put('/restore/:id', restoreControllerAdmin);

router.delete('/delete/:id', deleteControllerAdmin);

export default router;