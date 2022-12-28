import { Request, Response, NextFunction } from 'express';

export const validateRole = async (req: Request , res: Response, next: NextFunction) => {

    if(!req.user){

        return res.status(401).json({
            message: 'the token must be authenticated first'
        });

    }

    const { role } = req.user;

    if(!role){

        return res.status(401).json({
            message: 'Role is not provided'
        });

    }

    if(role !== 'ADMIN_ROLE'){

        return res.status(401).json({
            message: 'You cannot to do this, role invalid'
        });

    }

    next();

}