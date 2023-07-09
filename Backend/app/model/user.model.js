import mongoose from "mongoose";

//userSchema
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: String
    }
})

//user model
const User = mongoose.model("User", UserSchema, "user")

export default User;