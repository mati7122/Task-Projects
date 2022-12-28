import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
import { MessageSuccess, MessageError } from "../helpers/helper.messages";
import { User } from "../classes/class.user";
import { generateJWT } from "../helpers/helper.generate.jwt";

const salt = bcrypt.genSaltSync();
const user = new User();

//TODO: Crear un metodo que nos entregue usuarios a partir una ExpReg

export const createController = async (req: Request, res: Response) => {

    let { name, password, photo, about, role } = req.body;

    try {

        password = await bcrypt.hashSync(password, salt)

        const data = await user.createUser({ name, password, photo, about, role });

        res.status(200).json( MessageSuccess(data) );

    }
    catch (err) {

        res.status(500).json( MessageError(err) );

    }

};

export const getAllController = async (req: Request, res: Response) => {

    try {

        const data = await user.getAllUsers();

        res.status(200).json( MessageSuccess(data) );

    }
    catch(err){

        res.status(500).json( MessageError(err) );

    }

};

export const logInController = async (req: Request, res: Response) => {

    const { name, password } = req.body; //name, password

    try {
        const data = await user.getUser(name);
        const id = data.id;

        if (!data) {

            throw new Error('The user is not registered');

        }

        if (!bcrypt.compareSync(password, data.password)) {

            throw new Error('The passwords don`t match');

        }

        generateJWT({ name, id })
            .then(token => {
                res.status(200).json({
                    message: 'Request success! Token created',
                    token
                });
            })
            .catch(err => {
                res.status(500).json( MessageError(err) );
            })

    }
    catch (err) {

        res.status(500).json( MessageError(err) );

    }

};