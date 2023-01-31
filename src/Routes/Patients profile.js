const express = require("express");
const path = require("path");
const PathFolder = require("../Utils/Path");

const controller = require(path.join(PathFolder.pathControllers, "PatientProfile"));
const router = express.Router();

router.get("/edit-patient-:patientIDCode", controller.editPatient);
router.post("/edit-patient/submit", controller.postEditPatient);

module.exports = router;
