const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Route for new user Registeration
router.post('/register', authController.register);

router.post('/login', authController.login);

module.exports = router;