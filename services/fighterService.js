const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    // TODO: Implement methods to work with fighters
    getFighters(){
        return  FighterRepository.getAll();
    }
    create(params){
        return FighterRepository.create({"name":params.name,"health":"100","power":params.power, "defense":params.defense})
    }
    update(params){
        return UserRepository.update(params.id, {"name":params.name,"health":"100","power":params.power, "defense":params.defense})
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

module.exports = new FighterService();