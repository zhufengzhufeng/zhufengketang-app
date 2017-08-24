let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ketang', {useMongoClient: true});

let UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

module.exports = mongoose.model('User',UserSchema);
