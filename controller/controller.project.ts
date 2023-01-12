import { Request, Response } from "express";
import { MessageSuccess, MessageError } from "../helpers/helper.messages";
import { Project } from "../classes/class.project";

const project = new Project();

export const createController = async (req: Request, res: Response) => {

    const { id } = req.user;
    const { body } = req;

    try {

        const data = await project.createProject(Number(id), body);

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

}

export const getAllController = async (req: Request, res: Response) => {

    try {

        const data = await project.getAllProject();

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

}

export const getByIdController = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const data = await project.getProjectById(Number(id));

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

}

export const updateController = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const data = await project.updateProject(Number(id), body);

        res.status(200).json(MessageSuccess(data))

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

}

export const deleteController = async (req: Request, res: Response) => { //TODO: No funciona como quiero, "elimina" cualquier registro sin importar su estado

    const { id } = req.params;

    try {

        const data = await project.deleteProject(Number(id));

        res.status(200).json(MessageSuccess(data.projectUpdated));

    }
    catch (err) {

        res.status(500).json(MessageError(<Error>err));

    }

}