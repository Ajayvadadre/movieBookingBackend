const logSchema = require("../models/logSchema");








const getLogData = async (req, res) => {
    try {
      // console.log(req, res);
      const data = await logSchema.find();
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  

  module.exports ={
    getLogData
  }