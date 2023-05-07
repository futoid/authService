const UserService = require('../services/user-service');

const userService = new UserService();

const create = async(req, res) =>{
    try{
        const data = {
            email : req.body.email,
            password : req.body.password
        }
        const user = await userService.userCreate(data);
        return res.status(201).json({
            data : user,
            message : "User created successfully",
            error : {}
        })
    }
    catch (error){
        return res.status(500).json({
            data : {},
            message : "not able to create user",
            error : error
        })
    }
};

module.exports = {
    create
};