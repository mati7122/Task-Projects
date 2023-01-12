import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

export const validateErrors = (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);

    if (errors.lenght > 0) {
        return res.status(422).json({
            message: 'Error finded',
            errors
        });
    };

    next();
};