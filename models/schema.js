const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    // _id:{type:Number,required:true},
    name: { type: String, required: true },
    genre: { type: String, required: true },
    date_created: { type: String, required: true },
    director: { type: String, required: true },
    image: { type:String, required: true },
    description: { type:String, required: true },
    seats: { type:Array},
    price: { type:String}
})

const userData = mongoose.model("movieBooking", userSchema)

module.exports = userData;