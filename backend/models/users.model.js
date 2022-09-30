const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    password: {
        required: true,
        minlength: 5,

    },
    Skills: [String],
},
    {
        timestamps: true,
    });
const User = mongoose.model('User', userSchema);
module.exports = User;