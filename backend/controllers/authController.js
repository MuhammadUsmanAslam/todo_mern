const { userRegistrationSchema, userLoginSchema } = require("../schemaValidators/user_validator");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const authController = {
    register: async (req, res, next) => {
        const {error} = userRegistrationSchema.validate(req.body);

        // If there's any validation error then return and pass that error into next()
        if(error) {
            return next(error);
        }

        const {name, email, password} = req.body;

        const userExist = await User.exists({email});

        if(userExist){
            return res.status(400).json("User already exist");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const userCreated = await User.create({name, email, password:hashedPassword});        

        if(userCreated){
            return res.status(200).json("User created success");
        }

        return next();
    },
    login: async (req, res, next) => {
        const {error} = userLoginSchema.validate(req.body);

        // If there's any validation error then return and pass that error into next()
        if(error) {
            return next(error);
        }

        const {email, password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json("User does not exist");
        }

        const passwordMatched = await bcrypt.compare(password, userExist.password);

        if(!passwordMatched){
            return res.status(400).json("Invalid Credentials");
        }else if(passwordMatched){
            return res.status(200).json("Login sucess " + passwordMatched);
        }

        return next();
    }
}

module.exports = authController;