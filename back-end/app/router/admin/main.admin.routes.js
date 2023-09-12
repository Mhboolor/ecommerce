const checkPermission = require("../../http/middlewares/permission.guard");
const { PERMISSIONS } = require("../../utils/constans.utils");
const BlogRoutes = require("./blog/blog.routes");
const CategoryRoutes = require("./category/category.routes");
const DepartmentRoutes = require("./department/department.routes");
const DepartmentSubRoutes = require("./departmentSub/department-sub.routes");
const OffRoutes = require("./off/off.routes");
const PermissionRoutes = require("./permission/permissioin.routes");
const ProductRoutes = require("./product/product.routes");
const RoleRoutes = require("./role/role.routes");

const AdminRoutes = require("express").Router();

AdminRoutes.use("/permission", PermissionRoutes);
AdminRoutes.use("/role", RoleRoutes);
AdminRoutes.use(
  "/category",
  checkPermission([PERMISSIONS.ADMIN]),
  CategoryRoutes
);
AdminRoutes.use("/blog", checkPermission([PERMISSIONS.ADMIN]), BlogRoutes);
AdminRoutes.use(
  "/product",
  checkPermission([PERMISSIONS.ADMIN]),
  ProductRoutes
);
AdminRoutes.use("/off", checkPermission([PERMISSIONS.ADMIN]), OffRoutes);
AdminRoutes.use(
  "/department",
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentRoutes
);
AdminRoutes.use(
  "/departmentSub",
  checkPermission([PERMISSIONS.ADMIN]),
  DepartmentSubRoutes
);

module.exports = AdminRoutes;
