const { UserRepository } = require('../repositories/userRepository');

class UserService {

// TODO: Implement methods to work with user
    getUsers(){
        return  UserRepository.getAll();
    }
    create(params){
        //return  UserRepository.constructor(params)
        return UserRepository.create({"firstName":params.firstName,"lastName":params.lastName,"email":params.email,"phoneNumber":params.phoneNumber, "password":params.password})
    }
    update(params){
        return UserRepository.update(params.id, {"firstName":params.firstName,"lastName":params.lastName,"email":params.email,"phoneNumber":params.phoneNumber, "password":params.password})
    }
    delete(params){
        return UserRepository.delete(params.id)
    }
    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new UserService();