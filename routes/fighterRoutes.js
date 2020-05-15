const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();
router.get('/', function(req, res, next) {
    //res.send(UserService.getUsers());
    responseMiddleware(FighterService.getFighters(),res,next)
});
router.get('/:id', function (req,res){
    responseMiddleware(FighterService.search((v)=>v.id==req.params.id),res,next)
    // res.send(UserService.search((v)=>v.id==req.params.id));
});
router.post('/', createFighterValid,function(req, res, next) {
   // res.send(UserService.create("users"),res,next)
     responseMiddleware(FighterService.create(req.body),res,next)
    // res.send(UserService.create(req.params));

});
router.put('/:id', updateFighterValid, function (req,res,next){
    responseMiddleware(UserService.update(req.params),res,next)
    //res.send(UserService.save(req.params));

});
router.delete('/:id', function (req,res){
    responseMiddleware(UserService.delete(),res,next)
    //res.send(UserService.delete(req.params))
});
// TODO: Implement route controllers for fighter

module.exports = router;