const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderId: mongoose.Schema.Types.ObjectId,
    receiverId: mongoose.Schema.Types.ObjectId,
    body: String
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;