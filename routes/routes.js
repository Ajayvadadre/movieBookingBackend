const express = require("express")
const {getData,createData,getDataById,updateData,deleteData} = require("../controllers/dataController")
const router = express.Router()

router.route("/").get(getData)
router.route("/getDataById/:id").get(getDataById)
router.route("/createData").post(createData)
router.route("/update/:id").post(updateData)
router.route("/delete/:id").delete(deleteData)
// router.route("/deleteAll").post(deleteAll)
module.exports = router;