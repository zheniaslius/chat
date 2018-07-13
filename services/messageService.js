const messageRepository = require('../repositories/MessageRepository');
const MessageModel = require('../models/message');

const message = new messageRepository(MessageModel);

exports.create = messageDetails =>
    message.create(messageDetails);

exports.findAll = () =>
    message.findAll();

exports.findById = messageId =>
    message.findById(messageId);

exports.update = messageId =>
    message.update(messageId);

exports.delete = messageId =>
    message.delete(messageId);

exports.findSpeakers = userId =>
    message.findSpeakers(userId);

module.exports.message = message;