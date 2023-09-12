const createHttpError = require("http-errors");
const {
  RandomNumberGenerator,
  SignAccessToken,
  SignRefreshToken,
  // verifyRefreshToken,
} = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");
const { GetOtpValidation, CheckOtpValidation } = require("../../validation/auth/auth.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");

class Auth extends Controller {
  async getOtp(req, res, next) {
    try {
      const authValidation = await GetOtpValidation.validateAsync(req.body);
      const { mobile } = authValidation;
      const code = RandomNumberGenerator();
      const result = await this.saveUser(code, mobile);
      if (!result) throw createHttpError.Unauthorized("ورود شما انجام نشد");
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "ورود شما با موفقیت انجام شد",
          code,
          mobile,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async checkOtp(req, res, next) {
    try {
      const validation = await CheckOtpValidation.validateAsync(req.body);
      const { mobile, code } = validation;
      const user = await UserModel.findOne({ mobile }, { password: 0, "otp.expiresIn": 0 });
      if (!user) throw createHttpError.NotFound("کاربر مورد نظر یافت نشد");
      if (user.otp.code != code) throw createHttpError.Unauthorized("کد وارد شده معتبر نمی باشد");
      const now = new Date().getTime();
      if (+user.otp.expiresIn < now)
        throw createHttpError.Unauthorized("کد وارد شده منقضی شده است");
      const accessToken = await SignAccessToken(user._id);
      const refreshToken = await SignRefreshToken(user._id);
      res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "کد وارد شده صحیح می باشد",
          accessToken,
          refreshToken,
          user,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async getMe(req, res, next) {
    try {
      const user = req.user;

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          user,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  // async refreshToken(req, res, next) {
  //   try {
  //     const { refreshToken } = req.body;
  //     const mobile = await verifyRefreshToken(refreshToken);
  //     const user = await UserModel.findOne({ mobile },{"otp.expiresIn" : 0});
  //     const accessToken = await SignAccessToken(user._id);
  //     const newRefreshToken = await SignRefreshToken(user._id);
  //     return res.status(HttpStatus.OK).json({
  //       statusCode: HttpStatus.OK,
  //       data: {
  //         message: "توکن جدید ایجاد شد",
  //         accessToken,
  //         refreshToken: newRefreshToken,
  //         user,
  //       },
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // }

  async saveUser(code, mobile) {
    const now = new Date().getTime();
    let otp = {
      code,
      expiresIn: now + 10000,
    };
    const user = await this.checkExistUser(mobile);
    const countOfRegisteredUser = await UserModel.count();
    if (user) {
      if (+user.otp.expiresIn > now) {
        throw createHttpError.Forbidden("کد احراز هویت قبلی هنوز منقضی نشده است");
      }
      return await this.updateUser(mobile, { otp });
    }
    return await UserModel.create({
      mobile,
      otp,
      role: countOfRegisteredUser > 2 ? "USER" : "ADMIN",
    });
  }

  async checkExistUser(mobile) {
    const user = await UserModel.findOne({ mobile });
    return user;
  }

  async updateUser(mobile, objectData = {}) {
    Object.keys(objectData).forEach((key) => {
      if (["", " ", "0", 0, null, undefined, NaN].includes(objectData[key])) delete objectData[key];
    });
    const updateResult = await UserModel.updateOne({ mobile }, { $set: objectData });

    return !!updateResult.modifiedCount;
  }
}

const AuthController = new Auth();

module.exports = AuthController;
