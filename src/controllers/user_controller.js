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
            success : 'true',
            message : "User created successfully",
            error : {}
        })
    }
    catch (error){
        return res.status(500).json({
            data : {},
            success : 'false',
            message : "not able to create user",
            error : error
        })
    }
};

const signIn = async(req, res) => {
    try{
        const token = await userService.signIn(req.body.email , req.body.password);
        //console.log(token);
        return res.status(201).json({
            data : token,
            success : 'true',
            message : "User SignedIn successfully",
            error : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data : {},
            success : 'false',
            message : "not able to sign in",
            error : error 
        })
    }
}

module.exports = {
    create,
    signIn
};