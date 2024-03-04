const mongoose = require("mongoose");
const MongooseURI = process.env.MONGODBURI;
const PORT = process.env.PORT;

const connectMongoDB = () => {
    mongoose.connect(MongooseURI).then(()=>console.log(`Connection to DB is successful`)).catch(err => console.log(err.reason));
}

module.exports = {PORT, connectMongoDB}