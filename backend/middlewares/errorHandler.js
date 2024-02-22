const joi = require("joi");

const errorHandler = (error, req, res, next) => {
    let status = 500; 
    const data = {
        message: "Internal Server Error"
    }

    if(error instanceof joi.ValidationError){
        status = 422;
        data.message = error.message;

        return res.status(status).json(data);
    }

    if(error.status) {
        status = error.status;
    }

    if(error.message) {
        data.message = error.message;
    }

    return res.status(status).json(data);
}

module.exports = errorHandler;