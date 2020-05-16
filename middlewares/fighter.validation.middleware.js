const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const power_re=/^0*([1-9]|[1-8][0-9]|9[0-9]|99)$/;
    const defense_re=/^(?:[1-9]|0[1-9]|10)$/;

    if (
        req &&
        req.body
    ) {
        let a1 = Object.keys(fighter);
        let a2=Object.keys(req.body);
        let newBody = {};
        a1.filter(e => e != "id" && e!="health").forEach(e => newBody[e] = req.body[e]);
        //result.forEach(e => req.body[e] = null);
        req.body=newBody;

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
        req.body&&
        req.params.id

    ) {
        let a1 = Object.keys(fighter);
        let a2=Object.keys(req.body);
        const result = a2.filter(e => a1.indexOf(e) === -1 );

        console.log(req.body);
        //result.forEach(e => req.body[e] = null);
        //result.forEach(e =>console.log(req.body, e));
        console.log("test", result, req.body);
        let newBody = {};
        a1.filter(e => e != "id" && e!="health").forEach(e => newBody[e] = req.body[e]);
        //result.forEach(e => req.body[e] = null);
        req.body=newBody;
        console.log(req.body);
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

        next();
    } else {
        res.status(404).send({"error":"true", "message":"No fighter id"})
    }
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;