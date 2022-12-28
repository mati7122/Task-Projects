import { Response, Request } from 'express';
import { ProjectAdministrator } from '../classes/class.admin.project';
import { MessageSuccess, MessageError } from '../helpers/helper.messages';

const projectAdmin = new ProjectAdministrator();

export const getAllControllerAdmin = async (req: Request, res: Response) => {

    try {

        const data = await projectAdmin.getAllProjectAdmin();

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(err));

    }

};

export const restoreControllerAdmin = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const data = await projectAdmin.restoreProjectAdmin(Number(id));

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(err));

    }

};

export const deleteControllerAdmin = async (req: Request, res: Response) => { // !! This route delete task like "delete-hard"

    const { id } = req.params;

    try {

        const data = await projectAdmin.deleteProjectAdmin(Number(id));

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(err));

    }

}