const routes = require('express').Router();
const user = require('./user');
const message = require('./message');

routes.use('/users', user);
routes.use('/messages', message);

module.exports = routes;