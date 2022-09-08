const express = require("express");
const router = express.Router();
const { userLogIn, adminLogIn } = require("../login/login.controller.js");

router.use("/user", userLogIn);
router.use("/admin", adminLogIn);



module.exports = router;
