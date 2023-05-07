const express = require('express');
const router = express.Router();

const UserConroller = require('../../controllers/user_controller');

router.post("/signup" , UserConroller.create);

module.exports = router;