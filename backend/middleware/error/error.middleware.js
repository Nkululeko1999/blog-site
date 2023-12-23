export const errorHandler = (res, next, success, statuscode, message) => {
    const errorDisplay = {
        Success: success,
        StatusCode: statuscode,
        Message: message
    };

    res.status(statuscode).json(errorDisplay);
    next();
};
