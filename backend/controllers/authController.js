

const authController = {
    register: (req, res, next) => {
        res.send("Resgister new User");
    },
    login: (req, res, next) => {
        res.send("User Login");
    }
}

module.exports = authController;