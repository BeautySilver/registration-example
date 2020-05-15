const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const power_re=/^0*([0-9]|[1-8][0-9]|9[0-9]|99)$/;
    const defense_re=/^(?:[1-9]|0[1-9]|10)$/;
    if (
        req &&
        req.params
    ) {
        if (!power_re.test(req.body.power)){
            res.status(400).send({"error":"true", "message":"Invalid email"});
            return false
        }
        if (!defense_re.test(req.body.defense)){
            res.status(400).send({"error":"true", "message":"Invalid phone number"});
            return false
        }
        if(!req.body.name){
            res.status(400).send({"error":"true", "message":"No firstname"});
            return false
        }

        //TODO: check on email exist
        next();
    }

}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    const power_re=/^0*([0-9]|[1-8][0-9]|9[0-9]|99)$/;
    const defense_re=/^(?:[1-9]|0[1-9]|10)$/;
    if (
        req &&
        req.params &&
        req.params.id

    ) {
        if (!power_re.test(req.body.power)){
            res.status(400).send({"error":"true", "message":"Invalid email"});
            return false
        }
        if (!defense_re.test(req.body.defense)){
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
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;