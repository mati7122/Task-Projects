
type Message = {
    message: string;
    err?: Error;
    data?: object;
}

const MessageError: (err: Error) => Message = (err: Error): Message => {
    return {
        message: 'An error has ocurred',
        err
    }
};

const MessageSuccess: (data: object) => Message = (data: object): Message => {
    return {
        message: 'Request success!',
        data
    }
};

export {
    MessageError,
    MessageSuccess
};