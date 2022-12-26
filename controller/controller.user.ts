import { Request, Response } from "express";
import { MessageSuccess, MessageError } from "../helpers/helper.messages";
import { User } from "../classes/class.user";

const user = new User();

export const createController = (req: Request, res: Response) => {

    const { body } = req;

    try{

        const data = user.createUser(body);

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        MessageError(err);

    }

};