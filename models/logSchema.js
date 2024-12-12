const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String},
    password: { type: String},
    loginTime: {type:String},
    logOutTime:{type:String}
})

const logData = mongoose.model("logData", userSchema)

module.exports = logData;