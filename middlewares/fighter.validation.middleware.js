const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const power_re=/^0*([1-9]|[1-8][0-9]|9[0-9]|99)$/;
    const defense_re=/^(?:[1-9]|0[1-9]|10)$/;
    if (
        req &&
        req.params
    ) {
        if(req.body!=fighter){
            res.status(400).send({"error":"true", "message":"Something else in request"})
        }
        if (!power_re.test(req.body.power)){
            res.status(400).send({"error":"true", "message":"Invalid power"});
            return false
        }
        if (!defense_re.test(req.body.defense)){
            res.status(400).send({"error":"true", "message":"Invalid defense"});
            return false
        }
        if(!req.body.name){
            res.status(400).send({"error":"true", "message":"No Name"});
            return false
        }
        if(req.body.id){
            res.status(400).send({"error":"true", "message":"Id in body"})
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
        if(req.body!=fighter){
            res.status(400).send({"error":"true", "message":"Something else in request"})
        }
        if (!power_re.test(req.body.power)){
            res.status(400).send({"error":"true", "message":"Invalid power"});
            return false
        }
        if (!defense_re.test(req.body.defense)){
            res.status(400).send({"error":"true", "message":"Invalid defense"});
            return false
        }
        if(!req.body.name){
            res.status(400).send({"error":"true", "message":"No Name"});
            return false
        }
        if(req.body.id){
            res.status(400).send({"error":"true", "message":"Id in body"})
        }
        next();
    } else {
        res.status(404).send({"error":"true", "message":"No fighter id"})
    }
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;