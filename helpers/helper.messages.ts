
const MessageError = (err) => {
    return {
        message: 'An error has ocurred',
        err
    }
};

const MessageSuccess = (data) => {
    return {
        message: 'Request success!',
        data
    }
};

export {
    MessageError,
    MessageSuccess
};