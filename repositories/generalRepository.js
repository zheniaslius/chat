class GeneralRepository {
    constructor(Model) {
        this.Model = Model;
    }

    findAll() {
        return this.Model.find().exec();
    }

    findById(id) {
        return this.Model.findById(id).exec();
    }

    update(id) {
        return this.Model.findByIdAndUpdate(id).exec();
    }

    delete(id) {
        return this.Model.findByIdAndRemove(id).exec();
    }
}

module.exports = GeneralRepository;
