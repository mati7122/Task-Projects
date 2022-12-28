import jwt from 'jsonwebtoken';
import { load } from 'ts-dotenv';

const env = load({
    JWT_PRIVATEKEY: String
});

export const generateJWT = (payload: Object) => new Promise((resolve, reject) => {

    const token = jwt.sign(payload, env.JWT_PRIVATEKEY, (err, token) => {

        if(err){
            console.log('An error has ocurred, we do can`t provide the token');
            reject( err );
        }

        resolve( token );

    });

});

