const ProfileController = require("../../http/controller/user-profile/user-profile.controller");

const ProfileRoutes = require("express").Router();

ProfileRoutes.get("/bookmark-blog", ProfileController.getUserBookmarkedBlogs);
ProfileRoutes.get(
  "/bookmark-product",
  ProfileController.getUserBookmarkedProducts
);
ProfileRoutes.get("/basket", ProfileController.getUserBasket);

module.exports = ProfileRoutes;
