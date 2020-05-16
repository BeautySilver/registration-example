const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com$/;
    const phone_re=/^[+]380[0-9]{9}$/;
    if (
        req &&
        req.body
    ) {
        let a1 = Object.keys(user);
        let a2=Object.keys(req.body);


        let newBody = {};
        a1.filter(e => e != "id").forEach(e => newBody[e] = req.body[e]);
        //result.forEach(e => req.body[e] = null);
        req.body=newBody;
        if (!email_re.test(req.body.email)){
            res.status(400).send({"error":"true", "message":"Invalid email: "});

            return false
        }
        if (!phone_re.test(req.body.phoneNumber)){
            res.status(400).send({"error":"true", "message":"Invalid phone number"});
            return false
        }
        if(!req.body.firstName){
            res.status(400).send({"error":"true", "message":"No firstname"});
            return false
        }
        if(!req.body.lastName){
            res.status(400).send({"error":"true", "message":"No secondname"});
            return false
        }
        if(!req.body.password || req.body.password.length<3){
            res.status(400).send({"error":"true", "message":"Less than 3 symbols"});
            return false
        }

        //TODO: check on email exist
        next();
    }


}

const updateUserValid = (req, res, next) => {
    const email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@gmail.com$/;
    const phone_re=/^[+]380[0-9]{9}$/;

    if (
        req &&
        req.body &&
        req.params.id

    ) {
        let a1 = Object.keys(user);
        let a2=Object.keys(req.body);

        let newBody = {};
        a1.filter(e => e != "id").forEach(e => newBody[e] = req.body[e]);
        //result.forEach(e => req.body[e] = null);
        req.body=newBody;
        if (!email_re.test(req.body.email)){
            res.status(400).send({"error":"true", "message":"Invalid email: "});
            return false
        }
        if (!phone_re.test(req.body.phoneNumber)){
            res.status(400).send({"error":"true", "message":"Invalid phone number"});
            return false
        }
        if(!req.body.firstName){
            res.status(400).send({"error":"true", "message":"No firstname"});
            return false
        }
        if(!req.body.lastName){
            res.status(400).send({"error":"true", "message":"No secondname"});
            return false
        }
        if(!req.body.password || req.body.password.length<3){
            res.status(400).send({"error":"true", "message":"Less than 3 symbols"});
            return false
        }

        next();
    } else {
        res.status(404).send({"error":"true", "message":"No user id"})
    }
};

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;