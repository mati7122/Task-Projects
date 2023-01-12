import { Request, Response } from "express";
import { MessageSuccess, MessageError } from "../helpers/helper.messages";
import { Task } from "../classes/class.task";
import { Project } from "../classes/class.project";

const task: Task = new Task();
const project: Project = new Project();

export const createController = async (req: Request, res: Response) => {

    const { id } = req.user;
    // const { projectId } = req.query;
    const { body } = req;

    try {

        let { initDate, finishDate } = body;

        if (<Date>initDate.now() > <Date>finishDate.now()) {
            return res.status(500).json({
                message: 'initDate must be minor than finishDate'
            });
        }

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

        const data = await task.deleteTask(Number(id));

        res.status(200).json(MessageSuccess(data.taskDeleted));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

};