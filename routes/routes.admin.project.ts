import { Router, Request, Response } from 'express';
import { ProjectAdministrator } from "../classes/class.admin.project";
import { MessageSuccess, MessageError } from '../helpers/helper.messages';

const projectControllerInstance = new ProjectAdministrator();
const router = Router();

router.get('/get-all', async (req: Request, res: Response) => {

    try{

        const data = await projectControllerInstance.getAllProjectAdmin();

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.put('/restore/:id', async (req: Request, res: Response) => {

    const { id } = req.params;

    try{

        const data = await projectControllerInstance.restoreProjectAdmin(Number(id));

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.delete('/delete/:id', async (req: Request, res: Response) => { // !! This route delete task like "delete-hard"

    const { id } = req.params;

    try{

        const data = await projectControllerInstance.deleteProjectAdmin(Number(id));

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

export default router;