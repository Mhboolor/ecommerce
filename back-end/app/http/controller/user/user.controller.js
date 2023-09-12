const createHttpError = require("http-errors");
const {
  deleteInvalidPropertyInObject,
} = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");
const {
  changeRole,
  banUserValidation,
} = require("../../validation/user/user.validation");
const BanModel = require("../../models/ban/ban.model");

class User extends Controller {
  async updateUserProfile(req, res, next) {
    try {
      const userID = req.user._id;
      const data = req.body;
      const BlackListFields = [
        "mobile",
        "otp",
        "bills",
        "discount",
        "role",
        "Courses",
      ];
      deleteInvalidPropertyInObject(data, BlackListFields);
      const updateResult = await UserModel.updateOne(
        { _id: userID },
        { $set: data }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "کاربر مورد نظر با موفقیت به روزرسانی نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "کاربر مورد نظر با موفقیت به روزرسانی شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async getAllUsers(req, res, next) {
    try {
      const { search } = req.query;
      const dataQuery = {};
      if (search) dataQuery["$text"] = { $search: search };
      const users = await UserModel.find(dataQuery,{"otp.expiresIn" : 0});
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی کاربران موجود با موفقیت بازگردانده شدند",
          users,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async changeRoles(req, res, next) {
    try {
      const validation = await changeRole.validateAsync(req.body);
      const { id, role } = validation;
      await UserModel.findByIdAndUpdate({ _id: id }, { role: role });
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "نقش کاربر مورد نظر تغییر یافت",
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async banUser(req, res, next) {
    try {
      const validation = await banUserValidation.validateAsync(req.params);
      const { id } = validation;
      const mainUser = await UserModel.findOne({ _id: id }).lean();
      if (!mainUser) throw createHttpError.NotFound("کاربر مورد نظر یافت نشد");
      const banUserResult = await BanModel.create({ phone: mainUser.mobile });
      if (!banUserResult)
        throw createHttpError.InternalServerError("بن شدن کاربر انجام نشد");
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "کاربر مورد نظر با موفقیت بن شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

const UserController = new User();

module.exports = UserController;
