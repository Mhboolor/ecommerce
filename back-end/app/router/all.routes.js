const { verifyAccessToken } = require("../http/middlewares/verifyAccessToken.middleware");
const commentRoutes = require("./admin/comment/comment.routes");
const AdminRoutes = require("./admin/main.admin.routes");
const AuthRoutes = require("./auth/auth.routes");
const BasketRoutes = require("./basket/basket.routes");
const ContactRoutes = require("./contact/contact.routes");
const HomeRoutes = require("./home/home.routes");
const MenuRoutes = require("./menu/menu.routes");
const TicketRoutes = require("./ticket/ticket.routes");
const ProfileRoutes = require("./user-profile/user-profile.routes");
const UserRoutes = require("./user/user.routes");

const AllRoutes = require("express").Router();

AllRoutes.use("/", HomeRoutes);
AllRoutes.use("/auth", AuthRoutes);
AllRoutes.use("/admin", verifyAccessToken, AdminRoutes);
AllRoutes.use("/menu", MenuRoutes);
AllRoutes.use("/user", verifyAccessToken, UserRoutes);
AllRoutes.use("/comment", verifyAccessToken, commentRoutes);
AllRoutes.use("/contact", verifyAccessToken, ContactRoutes);
AllRoutes.use("/basket", verifyAccessToken, BasketRoutes);
AllRoutes.use("/profile", verifyAccessToken, ProfileRoutes);
AllRoutes.use("/ticket", verifyAccessToken, TicketRoutes);

module.exports = AllRoutes;
