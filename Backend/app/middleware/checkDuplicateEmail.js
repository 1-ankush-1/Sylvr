import User from "../model/user.model.js";

/**
 * check if email already exists
*/

const checkDuplicateEmail = (req, res, next) => {
    const { email } = req.body;
    
    //finding user by email
    User.findOne({ email }).then((result) => {
        //email exist then return
        if (result) {
            return res.status(400).send({
                message: "Email already Registered"
            })
        }
        //else call register function
        next();
    }).catch((err) => {
        console.error(err);
        res.status(500).send({
            message: "An error occurred while Registering"
        });
    })
}

export default checkDuplicateEmail;