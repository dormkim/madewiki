const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: { type: String, index: true, unique: true },
    pwd: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
});

module.exports = mongoose.model('User', userSchema);
