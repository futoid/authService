const {User} = require('../models/index');

class UserRepository{
    async createUser (data) {
        try{
            const user = await User.create(data);
            return user;
        }
        catch(err){
            console.log("error in repository layer");
            throw {err};
        }
    }
}

module.exports = UserRepository;