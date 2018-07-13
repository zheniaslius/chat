const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [
            function () { return this.name != null },
            'Name is required'
        ]
    },
    age: Number,
    email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;