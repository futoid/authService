const express = require('express');
const router = express.Router();

const UserConroller = require('../../controllers/user_controller');
const {AuthMiddleware} = require('../../middlewares/index');

router.post("/signup", AuthMiddleware.ValidateAuthRequest , UserConroller.create);
router.post("/signin", AuthMiddleware.ValidateAuthRequest  , UserConroller.signIn);

router.get('/isAuth', UserConroller.isAuthenticated);

module.exports = router;