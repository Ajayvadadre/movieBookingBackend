const express = require("express")
const {getData} = require("../controllers/data")
const router = express.Router()

router.route("/").get(getData)
    
// router.route("/create").post(createData)
// router.route("/update/:id").post(updateData)
// router.route("/delete/:id").delete(deleteData)
// router.route("/deleteAll").post(deleteAll)
module.exports = router;