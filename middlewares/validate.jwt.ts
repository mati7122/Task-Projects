import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { load } from 'ts-dotenv';
import { User } from '../classes/class.user';
import { MessageError } from "../helpers/helper.messages";

const env = load({
    JWT_PRIVATEKEY: String
});

const userInstance = new User();

export const validateJWT = async (req: Request, res: Response, next: NextFunction) => {

    const token: string = req.header('x-token');

    if (!token) {
        res.status(401).json({
            message: 'The token was not provided'
        });
    }

    try {

        const { name } = jwt.verify(token, env.JWT_PRIVATEKEY);

        const user = await userInstance.getUser(name);

        if (!user) {
            res.status(401).json({
                message: 'The user don`t exist in the database'
            });
        }

        next();
    }

    catch(err){
        res.status(500).json( MessageError(err) );
    }
    
}