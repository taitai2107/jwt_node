const express = require("express");
const router = express.Router();
const apicontroller = require("../controller/apiController");
router.get("/get-user", apicontroller.getUser);
router.get("/getdata", apicontroller.getDatafake);
router.post("/create-user", apicontroller.createUser);
router.delete("/delete-user", apicontroller.deleteUser);
router.put("/update-user", apicontroller.updateUser);
router.get("/sum", apicontroller.sumPrice);
module.exports = router;
