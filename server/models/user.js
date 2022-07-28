const mongoose = require('mongoose');
// create user schema with remember token
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
},{collection : 'user'});
module.exports = mongoose.model('User',UserSchema);