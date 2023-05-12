const express = require('express');
const router = express.Router();

const UserConroller = require('../../controllers/user_controller');
const {AuthMiddleware} = require('../../middlewares/index');

router.post("/signup", AuthMiddleware.ValidateAuthRequest , UserConroller.create);
router.post("/signin", AuthMiddleware.ValidateAuthRequest  , UserConroller.signIn);

//Authentication
router.get('/isAuth', UserConroller.isAuthenticated);

//If a user is admin verification
router.post('/isAdmin' , UserConroller.isAdmin);

module.exports = router;