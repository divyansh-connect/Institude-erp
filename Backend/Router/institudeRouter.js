const express = require("express");
const { admFromVadidator } = require("../Middleware/validationMW");
const institudeController = require("../Controller/institudeController");
const authMiddleware = require("../Middleware/authMiddleware");
const institudeRouter = express.Router();

institudeRouter.use(authMiddleware);
institudeRouter.post(
  "/admission",
  admFromVadidator,
  institudeController.postInstitudeAdmForm,
);

module.exports = institudeRouter;
