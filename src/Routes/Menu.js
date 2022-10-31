const express = require("express");
const path = require("path");
const PathFolder = require("../Utils/Path");

const controller = require(path.join(PathFolder.pathControllers, "Menu"));
const router = express.Router();

router.get("/", controller.getLobby);

module.exports = router;
