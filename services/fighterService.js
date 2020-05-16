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
        return FighterRepository.update(params.id, {"name":params.name,"health":"100","power":params.power, "defense":params.defense})
    }
    delete(params){
        return FighterRepository.delete(params.id)
    }
    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }
}

module.exports = new FighterService();