import User from "../model/user.model.js"

const logout = (req, res) => {
    //clear cookie
    res.clearCookie('token');
    res.send({ message: 'Logged out' });
}

const update = (req, res) => {
    console.log(req)
    //this holds old email
    const { mail } = req.query;
    const { email, firstname, lastname } = req.body;
    //new data
    const toupdate = {
        email,
        firstname,
        lastname
    }

    //check for old mail
    if (!mail) {
        return res.status(404).send({
            message: "Email or password is missing"
        })
    }

    //find that user
    User.findOne({ email: mail }).then((result) => {
        if (!result) {
            return res.status(404).send({ message: "no user found" });
        }
        //merge object
        Object.assign(result, toupdate);
        //save
        result.save().then((updatedData) => {
            if (!updatedData) {
                return res.status(500).send({ message: "no data found" });
            }
            const { password,...data } = updatedData.toObject()
            return res.status(500).send({ message: "updated succesfully", data:data  })
        }).catch((err) => {
            console.log(err);
            return res.status(500).send({ message: "something went wrong" });
        })
    }).catch((err) => {
        console.log(err);
        return res.status(500).send({ message: "something went wrong" });
    })
}

export default { update, logout };
