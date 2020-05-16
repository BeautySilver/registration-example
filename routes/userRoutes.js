const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const {responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
router.get('/', function(req, res, next) {
    //res.send(UserService.getUsers());
    responseMiddleware(UserService.getUsers(),res,next)
});

router.get('/:id', function (req,res,next){
    responseMiddleware(UserService.search(req.params.id),res,next)
    //res.send(UserService.search((v)=>v.id==req.params.id));
    //res.send(req.params.id)
});
router.post('/', createUserValid,function(req, res, next) {
    //res.send(UserService.create("users"),res,next)
    responseMiddleware(UserService.create(req.body),res,next)
    //res.send(UserService.create(req.body));

});
router.put('/:id',updateUserValid, function (req,res,next){
    responseMiddleware(UserService.update(req.body),res,next)
    //res.send(UserService.save(req.params));

});
router.delete('/:id',updateUserValid, function (req,res){
    responseMiddleware(UserService.delete(),res,next)
    //res.send(UserService.delete(req.params))
});

// TODO: Implement route controllers for user

module.exports = router;