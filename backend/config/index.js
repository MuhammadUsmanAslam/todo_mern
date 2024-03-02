const mongoose = require("mongoose");
const MongooseURI = process.env.MONGODBURI;
const PORT = process.env.PORT;

const connectMongoDB = () => {
    mongoose.connect('mongodb+srv://usman520:4GY5OHGQFBfY8XZJ@cluster0.a4xf8e0.mongodb.net/').then(()=>console.log(`Connection to DB is successful`)).catch(err => console.log(err.reason));
}

module.exports = {PORT, connectMongoDB}