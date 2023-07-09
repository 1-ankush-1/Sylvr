import jwt from "jsonwebtoken";
import secret from "../temp/secret.js";

const verifyToken = (req, res, next) => {
    console.log(req)
    let token = req.cookies.token;
    //if no token found
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    //verify token
    jwt.verify(token, secret, (err) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }
        next();
    });
};

export default verifyToken;