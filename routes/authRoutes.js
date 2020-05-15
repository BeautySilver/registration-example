const { Router } = require('express');
const AuthService = require('../services/authService');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', (req, res, next) => {
    //res.send(req);
    try {
        let data = AuthService.login({"email":req.body.email, "password":req.body.password})
        // TODO: Implement login action
        //res.data = data;
        res.send(data)
    } catch (err) {
        //res.status(400).send({"error":"true", "message":"Invalid password"});
        res.err = err;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;