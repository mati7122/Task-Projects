import { Request, Response } from "express";
import { MessageSuccess, MessageError } from "../helpers/helper.messages";
import { Task } from "../classes/class.task";

const task = new Task();

export const createController = async (req: Request, res: Response) => {

    const { body } = req;
    
    try{

        const data = await task.createTask(body);

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

};

export const getAllController = async (req: Request, res: Response) => {

    try{

        const data = await task.getAllTask();

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

};

export const getByIdController = async (req: Request, res: Response) => {

    const { id } = req.params;

    try{

        const data = await task.getTaskById(Number(id));

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

};

export const updateController = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try{

        const data = await task.updateTask(Number(id), body);

        res.status(200).json( MessageSuccess(data.taskUpdated) )

    }
    catch(err){
        
        res.status(500).json( MessageError(err) );

    }

};

export const deleteController = async (req: Request, res: Response) => { //TODO: No funciona como quiero, "elimina" cualquier registro sin importar su estado

    const { id } = req.params;

    try{

        const data = await task.deleteTask(Number(id));

        res.status(200).json( MessageSuccess(data.taskDeleted) );

    }
    catch(err){
        
        res.status(500).json( MessageError(err) );

    }

};