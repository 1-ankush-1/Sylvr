import dotenv from "dotenv"
dotenv.config();

//secret of jwt
const secret = process.env.SECRET;

export default secret;