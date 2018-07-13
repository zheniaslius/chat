const UserRepository = require('../repositories/UserRepository');
const MessageService = require('./messageService')
const UserModel = require('../models/user');

const user = new UserRepository(UserModel);

exports.createUser = userDetails =>
    user.create(userDetails);

exports.findAll = () =>
    user.findAll();

exports.findById = userId =>
    user.findById(userId);

exports.update = userId =>
    user.update(userId);

exports.delete = userId =>
    user.delete(userId);

exports.spokeWith = userId =>
    MessageService.message.findSpeakers(userId);