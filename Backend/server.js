import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./app/Config/dbConnet.js";
import routes from "./app/Routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());

//MiddleWare
app.use(cookieParser());
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
};
app.use(cors(corsOptions));

//connecting to database
connectDB();

//routes
app.get("/", (req, res) => {
    res.send("hello SYLVR")
});
app.use("/in", routes);

//start sever
app.listen(process.env.PORT || 8000, () => {
    console.log(`server is running on ${process.env.PORT || 8000}`)
})