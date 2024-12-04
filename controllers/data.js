const userModel = require('../models/schema');


const getData = async(req,res)=>{
    try {
      console.log(req,res )
        const user = await userModel.find()
        res.status(200).json(user)
      } catch (error) {
        console.log(error.message)
      }
}

module.exports = {getData}
