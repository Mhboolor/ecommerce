const createHttpError = require("http-errors");
const CategoryModel = require("../../models/category/category.model");
const {
  AddCategoryValidation,
  UpdateCategoryValidation,
} = require("../../validation/category/category.validation");
const { StatusCodes: HttpStatus } = require("http-status-codes");
const Controller = require("../controller");
const { default: mongoose } = require("mongoose");
const {
  ListOfImagesForRequest,
  deleteFileInPublic,
} = require("../../../utils/functions.utils");

class Category extends Controller {
  async addCategory(req, res, next) {
    try {
      const validation = await AddCategoryValidation.validateAsync(req.body);
      const images = ListOfImagesForRequest(
        req?.files || [],
        req.body.fileUploadPath
      );

      const { title, parent } = validation;
      await this.findCategoryWithTitle(title);
      if(parent){
         const category = await CategoryModel.create({ title, parent, images });
      if (!category)
        throw createHttpError.InternalServerError(
          "خطای داخلی || دسته بندی مورد نظر ایجاد نشد"
        );
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "دسته بندی مورد نظر با موفقیت ایجاد شد",
          category,
        },
      });
      }else{
         const category = await CategoryModel.create({ title, images });
      if (!category)
        throw createHttpError.InternalServerError(
          "خطای داخلی || دسته بندی مورد نظر ایجاد نشد"
        );
      res.status(HttpStatus.CREATED).json({
        statusCode: HttpStatus.CREATED,
        data: {
          message: "دسته بندی مورد نظر با موفقیت ایجاد شد",
          category,
        },
      });
      }
    } catch (err) {
      deleteFileInPublic(req.body.images);
      next(err);
    }
  }

  async getAllCategories(req, res, next) {
    try {
      const categories = await CategoryModel.find({ parent: undefined })
        .populate([
          {
            path: "children",
            select: { parent: 1, title: 1 },
            populate : {
              path : "children"
            }
          },
        ])
        .lean();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی دسته بندی های موجود با موفقیت بازگردانده شدند",
          categories,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async removeCategory(req, res, next) {
    try {
      const { field } = req.params;
      const category = await this.findCategoryWithTitleOrID(field);
      const removeResult = await CategoryModel.deleteMany({
        $or: [{ _id: category._id }, { parent: category._id }],
      });
      if (!removeResult.deletedCount)
        throw createHttpError.InternalServerError(
          "حذف دسته بندی با موفقیت انجام نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "حذف دسته بندی با موفقیت انجام شد",
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async updateCategoryTitle(req, res, next) {
    try {
      const images = ListOfImagesForRequest(
        req?.files || [],
        req.body.fileUploadPath
      );
      const { field } = req.params;
      const validation = await UpdateCategoryValidation.validateAsync(req.body);
      const { title } = validation;
      const category = await this.findCategoryWithTitleOrID(field);
      const updateResult = await CategoryModel.updateOne(
        { _id: category._id },
        { $set: { title, images } }
      );
      if (!updateResult.modifiedCount)
        throw createHttpError.InternalServerError(
          "به روزرسانی دسته بندی با موفقیت انجام نشد"
        );
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "به روزرسانی دسته بندی با موفقیت انجام شد",
        },
      });
    } catch (err) {
      deleteFileInPublic(req.body.images);
      next(err);
    }
  }

  async getOneCategory(req, res, next) {
    try {
      const { field } = req.params;
      const category = await this.findCategoryWithTitleOrID(field);
      const getCategory = await CategoryModel.aggregate([
        {
          $match: { _id: category._id },
        },
        {
          $lookup: {
            from: "categories",
            localField: "_id",
            foreignField: "parent",
            as: "children",
          },
        },
        {
          $project: {
            __v: 0,
            "children.__v": 0,
            "children.parent": 0,
          },
        },
      ]);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "دسته بندی مورد نظر با موفقیت بازگردانده شد",
          getCategory,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async getChildrenOfParent(req, res, next) {
    try {
      const { parent } = req.params;
      const children = await CategoryModel.find(
        { parent },
        { __v: 0, parent: 0 }
      ).lean();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "تمامی زیرمجموعه های پرنت مورد نظر بازگردانده شدند",
          children,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async findCategoryWithTitle(title) {
    const category = await CategoryModel.findOne({ title });
    if (category)
      throw createHttpError.BadRequest(
        "دسته بندی مورد نظر از قبل ایجاد شده است"
      );
  }
  async findCategoryWithTitleOrID(field) {
    const findQuery = mongoose.isValidObjectId(field)
      ? { _id: field }
      : { title: field };
    const category = await CategoryModel.findOne(findQuery);
    if (!category)
      throw createHttpError.NotFound("دسته بندی مورد نظر یافت نشد");
    return category;
  }
}

const CategoryController = new Category();

module.exports = CategoryController;
