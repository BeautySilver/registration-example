const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const {responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
router.get('/', function(req, res, next) {
    //res.send(UserService.getUsers());
    responseMiddleware(UserService.getUsers(),res)
});

router.get('/:id', function (req,res,next){
    responseMiddleware(UserService.search({id:req.params.id}),res)
    //res.send(UserService.search((v)=>v.id==req.params.id));
    //res.send(req.params.id)
});
router.post('/', createUserValid,function(req, res, next) {
    //res.send(UserService.create("users"),res,next)
    const userByEmail = UserService.search({email:req.body.email});
    const userByPhoneNumber = UserService.search({phoneNumber:req.body.phoneNumber});
    if(userByEmail){
        responseMiddleware({error:true, message:"Email isn't unique"},res,next)
    }
    else if(userByPhoneNumber){
        responseMiddleware({error:true, message:"Phone number isn't unique"},res,next)
    }
    else{
        next()
    }

},function(req,res){responseMiddleware(UserService.create(req.body),res)});

router.put('/:id',updateUserValid, function (req,res,next){
    const userByEmail = UserService.search({email:req.body.email});
    const userByPhoneNumber = UserService.search({phoneNumber:req.body.phoneNumber});
    if(userByEmail && userByEmail.id != req.params.id){
        responseMiddleware({error:true, message:"Email isn't unique"},res,next)
    }
    else if(userByPhoneNumber && userByPhoneNumber.id != req.params.id){
        responseMiddleware({error:true, message:"Phone number isn't unique",res,next})
    }
    else { next()}
    //res.send(UserService.save(req.params));
},function(req,res){responseMiddleware(UserService.update(req.body),res)});

router.delete('/:id', function (req,res,next){
    responseMiddleware(UserService.delete({id:req.params.id}),res,next)
    //res.send(UserService.delete(req.params))
});

// TODO: Implement route controllers for user

module.exports = router;