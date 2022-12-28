import { Router, Request, Response } from 'express';
import { TaskAdministrator } from "../classes/class.admin.task";
import { MessageSuccess, MessageError } from '../helpers/helper.messages';

const taskControllerInstance = new TaskAdministrator();
const router = Router();

router.get('/get-all', async (req: Request, res: Response) => {

    try{

        const data = await taskControllerInstance.getAllTaskAdmin();

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.put('/restore/:id', async (req: Request, res: Response) => {

    const { id } = req.params;

    try{

        const data = await taskControllerInstance.restoreTaskAdmin(Number(id));

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.delete('/delete/:id', async (req: Request, res: Response) => { // !! This route delete task like "delete-hard"

    const { id } = req.params;

    try{

        const data = await taskControllerInstance.deleteTaskAdmin(Number(id));

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

export default router;