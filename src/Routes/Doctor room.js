const express = require("express");
const path = require("path");
const PathFolder = require("../Utils/Path");

const router = express.Router();
const controller = require(path.join(
  PathFolder.pathControllers,
  "Doctor room"
));

router.get("/doctor-:doctorID", controller.getDoctor);
router.get("/doctor-:ID/submit", controller.postPopPatient);

module.exports = router;
