const express = require("express");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();
const { PORT } = require("./config/index");

const app = express();

app.use(router);

// Error Handler MiddleWare 
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`);
});