import express from "express";
import authController from "../../controllers/auth-controller.js";
import otpController from "../../controllers/otp-controller.js";
import Response from "../../libs/api/response.js";

const auth_api = express.Router();
auth_api.post("/register", Response(authController.register));
auth_api.post("/send-otp", Response(otpController.save));
export default auth_api;
