import User from "../model/user.model.js";
import jwt from "jsonwebtoken"
import secret from "../temp/secret.js";
import crypto from "crypto";

const signin = (req,res) => {
    const { email, password } = req.query;
    //check for email and password empty then return
    if (!email || !password) {
        return res.status(404).send({
            message: "Email or password is missing"
        })
    }
    
    //hash password
    const passHash = crypto.pbkdf2Sync(password, process.env.PASSKEY, 10000, 512, 'sha512').toString('hex');
    
    //jwt token expires in 24 hours
    const token = jwt.sign({ email:email }, secret, { expiresIn: 86400 });
    
    //set token for 1 day
    res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 }); 
    
    //find if user exist
    User.findOne({ email }).then((result) => {
        if (!result) {
            return res.status(404).send({
                message: "No user Found"
            })
        }
      
        //check if passowrd is correct or not
        if (result.password !== passHash) {
            return res.status(404).send({
                message: "Enter valid password"
            })
        }
       
        //send whole data except password
        const { password, ...data } = result.toObject();
        // console.log(data)
        return res.status(200).send({
            message: "Login succesfull", data: data
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            message: "something went wrong"
        })
    });
}


const register = (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    //check for email and password empty then return
    if (!email || !password) {
        return res.status(404).send({
            message: "Email or password is missing"
        })
    }

    //hash password
    const passHash = crypto.pbkdf2Sync(password, process.env.PASSKEY, 10000, 512, 'sha512').toString('hex');

    //create new object of user
    const user = new User({
        firstname,
        lastname,
        email,
        password: passHash
    })

    //save new user
    user.save().then((result) => {
        //if succ then return success
        if (result) {
            return res.status(200).send({
                message: "user created successfully"
            })
        }
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({
            message: "something went wrong"
        })
    });
}

export default { signin, register }
