const express = require("express");
const path = require("path");
const PathFolder = require("../Utils/Path");

const controller = require(path.join(PathFolder.pathControllers, "Queue room"));

const router = express.Router();

router.get("/queue-room", controller.getQueueRoom);
router.post("/queue-room/submit", controller.postMovePatients);

module.exports = router;
