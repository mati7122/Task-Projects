import { Router } from 'express';
import { getAllControllerAdmin, restoreControllerAdmin, deleteControllerAdmin } from '../controller/controller.admin.task';

// ? This routes only can management by a user with an admin role

const router = Router();

router.get('/get-all', getAllControllerAdmin);

router.put('/restore/:id', restoreControllerAdmin);

// ! The next route realize a hard delete in your database, don`t use paranoid from sequelize
router.delete('/delete/:id', deleteControllerAdmin);

export default router;