import { Router, Request, Response } from 'express';
import { ProjectController } from "../models/model.project.controller";

const projectControllerInstance = new ProjectController(); 
const router = Router();

type ErroMessage = {
    message: string,
    err: string
}

const MessageError = (err) => {
    return {
        message: 'An error has ocurred',
        err
    }
};

const MessageSuccess = (data) => {
    return {
        message: 'Request success!',
        data
    }
};

router.post('/create', async (req: Request, res: Response) => {

    const { body } = req;
    
    try{

        const data = await projectControllerInstance.createProject(body);

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.get('/get-all', async (req: Request, res: Response) => {

    try{

        const data = await projectControllerInstance.getAllProject();

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.get('/get/:id', async (req: Request, res: Response) => {

    const { id } = req.params;

    try{

        const data = await projectControllerInstance.getProjectById(Number(id));

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

});

router.put('/update/:id', async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try{

        const data = await projectControllerInstance.updateProject(Number(id), body);

        res.status(200).json( MessageSuccess(data) )

    }
    catch(err){
        
        res.status(500).json( MessageError(err) );

    }

});

router.delete('/delete/:id', async (req: Request, res: Response) => { //TODO: No funciona como quiero, "elimina" cualquier registro sin importar su estado

    const { id } = req.params;

    try{

        const data = await projectControllerInstance.deleteProject(Number(id));

        res.status(200).json( MessageSuccess(data.projectUpdated) );

    }
    catch(err){
        
        res.status(500).json( MessageError(err) );

    }

});

export default router;