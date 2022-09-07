const express = require("express");
const router = express.Router();
const { getTopActors } = require("./actors.controller.js");

router.get("/", getTopActors);

module.exports = router;
