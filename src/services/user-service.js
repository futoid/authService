const UserRepository = require('../repository/user-repository');

class UserService{
    constructor () {
        this.userRepository = new UserRepository();
    }

    async userCreate(data){
        try{
            const user = await this.userRepository.createUser(data);
            return user;
        }
        catch(error){
            console.log('error in service layer');
            throw {error};
        }
    }
}

module.exports = UserService;