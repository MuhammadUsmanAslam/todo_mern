const express = require("express");
const router = require("./config/index");
require("dotenv").config();

const app = express();

app.use(router);

// Port number from environmental variables
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
});