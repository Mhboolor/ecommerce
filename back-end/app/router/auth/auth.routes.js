const AuthController = require("../../http/controller/auth/auth.controller");
const { verifyAccessToken } = require("../../http/middlewares/verifyAccessToken.middleware");

const AuthRoutes = require("express").Router();

AuthRoutes.post("/get-otp", AuthController.getOtp);
AuthRoutes.post("/check-otp", AuthController.checkOtp);
AuthRoutes.get("/get-me", verifyAccessToken, AuthController.getMe);
// AuthRoutes.post("/refresh-token", AuthController.refreshToken);

module.exports = AuthRoutes;
