const express = require("express");
const router = express.Router();
const { userLogIn } = require("../login/login.controller.js");
const loginFieldValidation = require("../login/login.validation.js");

router.post("/", loginFieldValidation, userLogIn);

module.exports = router;
