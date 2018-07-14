const User = require('../models/user');
const GeneralRepository = require('../repositories/generalRepository');

class UserRepository extends GeneralRepository {
    constructor(Model) {
        super(Model);
    }

    create(userDetails) {
        const user = new User({
            name: userDetails.name,
            age: userDetails.age,
            email: userDetails.email
        });
        return user.save();
    }

    findByIds(ids) {
        return User.find()
        .where('_id')
        .in(ids)
        .exec();
    }
}

module.exports = UserRepository;