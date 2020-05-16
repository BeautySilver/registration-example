const responseMiddleware = (req, res, next) => {

    if (req.error){
        if (req.message === "No such id"){
            res.status(404).send(req)
        }
        else{res.status(400).send(req)}

    }
    else if(next){
        next()
    }
    else{
        res.status(200).send(req)
    }
    // TODO: Implement middleware that returns result of the query
}

exports.responseMiddleware = responseMiddleware;