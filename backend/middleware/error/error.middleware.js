export const errorHandler = (res, success, statuscode, message) => {
    const errorDisplay = {
        Success: success,
        StatusCode: statuscode,
        message: message
    };

    res.status(statuscode).json(errorDisplay);
};
