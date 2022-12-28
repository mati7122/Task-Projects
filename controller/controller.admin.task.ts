import { Response, Request } from 'express';
import { TaskAdministrator } from '../classes/class.admin.task';
import { MessageSuccess, MessageError } from '../helpers/helper.messages';

const taskAdmin = new TaskAdministrator();

export const getAllControllerAdmin = async (req: Request, res: Response) => {

    try {

        const data = await taskAdmin.getAllTaskAdmin();

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(err));

    }

};

export const restoreControllerAdmin = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const data = await taskAdmin.restoreTaskAdmin(Number(id));

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(err));

    }

};

export const deleteControllerAdmin = async (req: Request, res: Response) => { // !! This route delete task like "delete-hard"

    const { id } = req.params;

    try {

        const data = await taskAdmin.deleteTaskAdmin(Number(id));

        res.status(200).json(MessageSuccess(data));

    }
    catch (err) {

        res.status(500).json(MessageError(err));

    }

}