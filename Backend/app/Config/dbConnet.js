import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log(`successfully connected to mongo db`)
    }).catch((err) => {
        console.log(`database failed to connect ${err}`)
    });
}

export default connectDB;