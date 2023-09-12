const UserController = require("../../http/controller/user/user.controller");
const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");

const UserRoutes = require("express").Router();

UserRoutes.patch("/update-profile", UserController.updateUserProfile);
UserRoutes.patch(
  "/update-role",
  checkPermission([PERMISSIONS.ADMIN]),
  UserController.changeRoles
);
UserRoutes.post(
  "/ban/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  UserController.banUser
);
UserRoutes.get(
  "/list",
  checkPermission([PERMISSIONS.ADMIN]),
  UserController.getAllUsers
);

module.exports = UserRoutes;
