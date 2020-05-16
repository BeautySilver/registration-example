const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();
router.get('/', function(req, res) {
    //res.send(UserService.getUsers());
    responseMiddleware(FighterService.getFighters(),res)
});
router.get('/:id', function (req,res){
    responseMiddleware(FighterService.search({id:req.params.id}),res)
    // res.send(UserService.search((v)=>v.id==req.params.id));
});
router.post('/', createFighterValid,function(req, res, next) {
   // res.send(UserService.create("users"),res,next)
    const fighterByName = FighterService.search({name:req.body.name});
    if(fighterByName){
        responseMiddleware({error:true, message:"Name isn't unique"},res,next)
    }
    else{
        next()
    }

    // res.send(UserService.create(req.params));

},function(req,res){responseMiddleware(FighterService.create(req.body),res)});

router.put('/:id', updateFighterValid, function (req,res,next){
    const fighterByName = FighterService.search({name:req.body.name});
    if(fighterByName && fighterByName.id != req.params.id){
        responseMiddleware({error:true, message:"Name isn't unique"},res,next)
    }
    else{
        next()
    }


},function(req,res){responseMiddleware(FighterService.update(req.body),res)});

router.delete('/:id', function (req,res){
    responseMiddleware(UserService.delete({id:req.params.id}),res)
    //res.send(UserService.delete(req.params))
});
// TODO: Implement route controllers for fighter

module.exports = router;