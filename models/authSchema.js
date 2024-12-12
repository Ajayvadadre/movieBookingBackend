const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type:String},
    email: { type:String},
    password: { type:String},
    time_created : {type:Object},
    loginTime : {type:String},
    logoutTime :{type:String},
    hashPassword: { type:String}
})

const userAuthentication = mongoose.model("auth", userSchema)

module.exports = userAuthentication;