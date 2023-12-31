const createHttpError = require("http-errors");
const PermissionModel = require("../../models/permission/permission.model");
const PermissionValidation = require("../../validation/RBAC/permission.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");
const {
  copyObject,
  deleteInvalidPropertyInObject,
} = require("../../../utils/functions.utils");

class Permission extends Controller {
  async createNewPermission(req, res, next) {
    try {
      const validation = await PermissionValidation.validateAsync(req.body);
      const { name, description } = validation;
      await this.findPermissionWithName(name);
      const permissions = await PermissionModel.create({ name, description });
      if (!permissions)
        throw createHttpError.InternalServerError("دسترسی مورد نظر ایجاد نشد");
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "دسترسی مورد نظر ایجاد شد",
          permissions,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async getAllPermission(req, res, next) {
    try {
      const permissions = await PermissionModel.find({});
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی دسترسی های موجود بازگردانده شدند",
          permissions,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async removePermission(req, res, next) {
    try {
      const { id } = req.params;
      await this.findPermissionWithID(id);
      const removeResult = await PermissionModel.deleteOne({ _id: id });
      if (!removeResult.deletedCount)
        throw createHttpError.InternalServerError("دسترسی مورد نظر حذف نشد");
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "دسترسی مورد نظر با موفقیت حذف شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async updatePermission(req, res, next) {
    try {
      const { id } = req.params;
      const permission = await this.findPermissionWithID(id);
      const data = copyObject(req.body);
      deleteInvalidPropertyInObject(data, []);
      const updateResult = await PermissionModel.updateOne(
        { _id: permission._id },
        { $set: data }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "به روزرسانی دسترسی مورد نظر با موفقیت انجام نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "به روزرسانی دسترسی مورد نظر با موفقیت انجام شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async findPermissionWithID(ID) {
    const permission = await PermissionModel.findById(ID);
    if (!permission) throw createHttpError.NotFound("دسترسی مورد نظر یافت نشد");
    return permission;
  }

  async findPermissionWithName(name) {
    const permission = await PermissionModel.findOne({ name });
    if (permission)
      throw createHttpError.BadRequest("دسترسی مورد نظر از قبل ایجاد شده است");
  }
}

const PermissionController = new Permission();

module.exports = PermissionController;
