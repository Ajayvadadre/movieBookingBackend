const mongoose = require("mongoose")

// let url ="mongodb+srv://anupamy316102:anupam@crud.89sbu.mongodb.net/?retryWrites=true&w=majority&appName=crud";
let url ="mongodb+srv://ajayvadadre:ajayvadadre1234@nodemongocluster.1y5lp.mongodb.net/";

const connectDB = () =>{
    console.log('Db connected');
    return mongoose.connect(url)
}
module.exports = connectDB;