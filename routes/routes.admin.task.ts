import { Router } from 'express';
import { TaskAdministrator } from "../classes/class.admin.task";
import { getAllControllerAdmin, restoreControllerAdmin, deleteControllerAdmin } from '../controller/controller.admin.task';

const taskControllerInstance = new TaskAdministrator();
const router = Router();

router.get('/get-all', getAllControllerAdmin);

router.put('/restore/:id', restoreControllerAdmin);

router.delete('/delete/:id', deleteControllerAdmin);

export default router;