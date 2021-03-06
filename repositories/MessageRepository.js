const Message = require('../models/message');
const GeneralRepository = require('../repositories/generalRepository');

class MessageRepository extends GeneralRepository {
    constructor(Model) {
        super(Model);
    }

    create(messageDetails) {
        const message = new Message({
            senderId: messageDetails.senderId,
            receiverId: messageDetails.receiverId,
            body: messageDetails.body
        });
        return message.save();
    }

    findSpeakers(userId) {
        return Message.find()
        .where('senderId').equals(userId)
        .distinct('receiverId')
        .exec()
    }
}

module.exports = MessageRepository