const { userRegistrationSchema } = require("../schemaValidators/user_validator");

const authController = {
    register: (req, res, next) => {
        // res.send("Resgister new User");
        const {error} = userRegistrationSchema.validate(req.body);

        // If there's any validation error then return and pass that error into next()
        if(error) {
            return next(error);
        }
        res.status(200).json("Registration Validation is passed now work on storing data into db")
    },
    login: (req, res, next) => {
        // res.send("User Login");
        const {error} = userLoginSchema.validate(req.body);

        // If there's any validation error then return and pass that error into next()
        if(error) {
            return next(error);
        }
        res.status(200).json(" Login Validation is passed now work on storing data into db")
    }
}

module.exports = authController;