const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/users';

mongoose.Promise = global.Promise;

mongoose.connect(mongoDB)
    .then(() => {
        console.log("Successfully connected to the database");    
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });

module.exports = mongoose