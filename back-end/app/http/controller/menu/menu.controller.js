const createHttpError = require("http-errors");
const MenuModel = require("../../models/menu/menu.model");
const MenuValidation = require("../../validation/menu/menu.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");
const { default: mongoose } = require("mongoose");
const {
  deleteInvalidPropertyInObject,
  copyObject,
} = require("../../../utils/functions.utils");

class Menu extends Controller {
  async createMenu(req, res, next) {
    try {
      const validation = await MenuValidation.validateAsync(req.body);
      const { title } = validation;
      await this.findMenuWithTitle(title);
      const menu = await MenuModel.create({ title });
      if (!menu)
        throw createHttpError.InternalServerError("منو مورد نظر ایجاد نشد");
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "منو مورد نظر با موفقیت ایجاد شد",
          menu,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async createSubmenu(req, res, next) {
    try {
      const { titleName } = req.params;
      const validation = await MenuValidation.validateAsync(req.body);
      const { title } = validation;
      await this.findMenuWithTitle(title);
      const menu = await MenuModel.findOneAndUpdate(
        { title: titleName },
        {
          $push: {
            submenu: {
              title,
            },
          },
        }
      );
      if (!menu)
        throw createHttpError.InternalServerError("زیر منو مورد نظر ایجاد نشد");
      return res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "زیر منو مورد نظر با موفقیت ایجاد شد",
          menu,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async getListOfMenus(req, res, next) {
    try {
      const menu = await MenuModel.find({ __v: 0 });
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی منوهای موجود با موفقیت به روز رسانی شدند",
          menu,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async updateMenu(req, res, next) {
    try {
      const { field } = req.params;
      const validation = await MenuValidation.validateAsync(req.body);
      const menu = await this.findMenuWithIdOrTitle(field);
      const data = copyObject(validation);
      deleteInvalidPropertyInObject(data, []);
      const updateResult = await MenuModel.updateOne(
        { _id: menu._id },
        { $set: data }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "منو مورد نظر با موفقیت به روزرسانی نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "منو مورد نظر با موفقیت به روزرسانی شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async removeMenu(req, res, next) {
    try {
      const { field } = req.params;
      const menu = await this.findMenuWithIdOrTitle(field);
      const removeResult = await MenuModel.deleteOne({ _id: menu._id });
      if (!removeResult.deletedCount)
        throw createHttpError.InternalServerError(
          "منو مورد نظر با موفقیت حذف نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "منو مورد نظر با موفقیت حذف شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async findMenuWithTitle(title) {
    const menu = await MenuModel.findOne({ title });
    if (menu)
      throw createHttpError.BadRequest("منو مورد نظر از قبل ایجاد شده است");
  }

  async findMenuWithIdOrTitle(field) {
    const findQuery = mongoose.isValidObjectId(field)
      ? { _id: field }
      : { title: field };

    const menu = await MenuModel.findOne(findQuery);
    if (!menu) throw createHttpError.NotFound("منو مورد نظر یافت نشد");
    return menu;
  }
}

const MenuController = new Menu();

module.exports = MenuController;
