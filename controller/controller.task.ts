import { Request, Response } from "express";
import { MessageSuccess, MessageError } from "../helpers/helper.messages";
import { Task } from "../classes/class.task";
import { Project } from "../classes/class.project";

const task: Task = new Task();
const project: Project = new Project();

const ComparerDates = (initDate: string, finishDate: string, res: Response) => {
    const initDateToCompare: Date = new Date(initDate);
    const finishDateToCompare: Date = new Date(finishDate);

    if(initDateToCompare > finishDateToCompare) {
        return res.status(500).json({
            message: 'initDate must be minor or equal than finishDate'
        })
    }
}

export const createController = async (req: Request, res: Response) => {

    const { id } = req.user;
    // const { projectId } = req.query;
    const { body } = req;

    try {

        let { initDate, finishDate } = body;

        // const initDateToCompare: Date = new Date(initDate);
        // const finishDateToCompare: Date = new Date(finishDate);

        // if (initDateToCompare > finishDateToCompare) {
        //     return res.status(500).json({
        //         message: 'initDate must be minor or equal than finishDate'
        //     });

        // }

        ComparerDates(initDate, finishDate, res);

        if (!req.query.projectId) {
            const data = await task.createTask(body, Number(id));

            return res.status(200).json(MessageSuccess(data));
        }

        const ifProjectExist = await project.getProjectById(Number(req.query.projectId));

        if (!ifProjectExist) {
            return res.status(400).json({
                message: 'The referenced project don´t exist'
            });
        }

        const data = await task.createTask(body, Number(id), Number(req.query.projectId));

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

};

export const getAllController = async (req: Request, res: Response) => {

    try {

        const data = await task.getAllTask();

        if (data.length == 0) {
            return res.status(200).json(MessageSuccess('Don`t exist data to show'));
        }

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

};

export const getByIdController = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const data = await task.getTaskById(Number(id));

        if(!data) {
            res.status(500).json({
                message: `The task with the id: ${id} don´t exist`
            });
        }

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

};

export const updateController = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        let { initDate, finishDate } = body;

        ComparerDates(initDate, finishDate, res);

        const verifyIfTaskExist = await task.getTaskById(Number(id));

        if(!verifyIfTaskExist){
            return res.status(500).json({
                message: 'The task that you try update don´t exist'
            });
        }

        const data = await task.updateTask(Number(id), body);

        res.status(200).json(MessageSuccess(data.taskUpdated))

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

};

export const deleteController = async (req: Request, res: Response) => { //TODO: No funciona como quiero, "elimina" cualquier registro sin importar su estado

    const { id } = req.params;

    try {

        const verifyIfTaskExist = await task.getTaskById(Number(id));

        console.log(verifyIfTaskExist);

        if(!verifyIfTaskExist){
            return res.status(500).json({
                message: 'The task that you try delete don´t exist'
            });
        }
    
        const data = await task.deleteTask(Number(id));

        res.status(200).json(MessageSuccess(data.taskDeleted));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

};