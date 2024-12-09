const express = require("express")
const {getData,createData,getDataById,updateData,deleteData,setSeatData,getSeatData,setPrice,getSeatDataById,saveUser,authentication,saveLogData} = require("../controllers/dataController")
const router = express.Router()

router.route("/").get(getData)
router.route("/getDataById/:id").get(getDataById)
router.route("/authentication").post(authentication)
router.route("/createData").post(createData)
router.route("/update/:id").post(updateData)

router.route("/addLogTime").post(saveLogData)
    
router.route("/delete/:id").delete(deleteData)
router.route("/setSeatData").post(setSeatData)
// router.route("/deleteSeatData").post(deleteSeatData)
router.route("/getSeatData/:id").get(getSeatData)
router.route("/getSeatDataById/:id").get(getSeatDataById)
router.route("/setPrice").post(setPrice)
router.route("/registerData").post(saveUser)
// router.route("/deleteAll").post(deleteAll)
module.exports = router;
