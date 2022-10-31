const express = require("express");

const path = require("path");
const PathFolder = require("../Utils/Path");

const controller = require(path.join(PathFolder.pathControllers, "Lobby"));
const router = express.Router();

router.get("/lobby", controller.getLobby);
router.post("/lobby/submit", controller.postAddPatient);

module.exports = router;
