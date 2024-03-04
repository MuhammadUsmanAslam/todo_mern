const { Schema, mongoose } = require("mongoose");

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema);