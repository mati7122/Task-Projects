import { Router, Request, Response } from 'express';
import { TaskController } from "../models/model.task.controller";

const taskController = new TaskController(); //Task controller instance
const router = Router();

router.post('/create', async (req: Request, res: Response) => {
    const { body } = req;
    const data = await taskController.createTask(body);
    res.json({
        data
    });
});

router.get('/get-all', (req: Request, res: Response) => { });

router.get('/get/:id', (req: Request, res: Response) => { });

router.post('/get/:id', (req: Request, res: Response) => { });

router.delete('/delete/:id', (req: Request, res: Response) => { });

export default router;