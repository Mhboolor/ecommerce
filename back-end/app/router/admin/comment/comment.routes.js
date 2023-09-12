const CommentController = require("../../../http/controller/comment/comment.controller");
const checkPermission = require("../../../http/middlewares/permission.guard");
const {
  verifyAccessToken,
} = require("../../../http/middlewares/verifyAccessToken.middleware");
const { PERMISSIONS } = require("../../../utils/constans.utils");

const commentRoutes = require("express").Router();

commentRoutes.post("/add", CommentController.createComment);
commentRoutes.get(
  "/list",
  checkPermission([PERMISSIONS.ADMIN]),
  CommentController.getAllComments
);
commentRoutes.patch(
  "/show/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  CommentController.showComment
);
commentRoutes.patch("/answer/:id", CommentController.createAnswer);
commentRoutes.delete(
  "/remove/:id",
  checkPermission([PERMISSIONS.ADMIN]),
  CommentController.removeComment
);

module.exports = commentRoutes;
