const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    role: {
        type: String,
        require: true,
        default: "user"
    },
    name:  {
        type: String,
        required: true
    },
    email:  {
        type: String,
        required: true,
        unique: true
    },
    password:  {
        type: String,
        required: true
    },
    Date:  {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('user', userSchema);
