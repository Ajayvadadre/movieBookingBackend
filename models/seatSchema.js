const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    _id:{type:String,required:true},
    seatsById: { type:Array},
    price: { type:String}
})

const seatData = mongoose.model("seats", userSchema)

module.exports = seatData;