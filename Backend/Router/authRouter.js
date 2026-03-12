const express = require("express");
const authController = require("../Controller/authController");
const authMiddleware = require("../Middleware/authMiddleware");
const authRouter = express.Router();

authRouter.post("/login", authController.postLogin);
authRouter.post("/register", authController.postSignUp);
authRouter.get("/verify", authMiddleware, authController.getVerify);
module.exports = authRouter;
