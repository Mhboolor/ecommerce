const { StatusCodes: HttpStatus } = require("http-status-codes");
const BlogModel = require("../../models/blog/blog.model");
const ProductModel = require("../../models/product/product.model");
const { getBasketOfUser } = require("../../../utils/functions.utils");

class Profile {
  async getUserBookmarkedBlogs(req, res, next) {
    try {
      const user = req.user;
      const blogs = await BlogModel.find({ bookmarks: user._id })
        .populate([
          {
            path: "author",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "category",
            select: { title: 1, _id: 0 },
          },
          {
            path: "likes",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "dislikes",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "bookmarks",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
        ])
        .lean();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "لیست ذخیره شده ها با موفقیت بازگردانده شد",
          blogs,
        },
      });
    } catch (err) {
      next(err);
    }
  }
  async getUserBookmarkedProducts(req, res, next) {
    try {
      const user = req.user;
      const products = await ProductModel.find({ bookmarks: user._id })
        .populate([
          {
            path: "supplier",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "category",
            select: { title: 1, _id: 0 },
          },
          {
            path: "likes",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "dislikes",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
          {
            path: "bookmarks",
            select: {
              first_name: 1,
              last_name: 1,
              username: 1,
              role: 1,
              _id: 0,
            },
          },
        ])
        .lean();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "لیست ذخیره شده ها با موفقیت بازگردانده شد",
          products,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  async getUserBasket(req, res, next) {
    try {
      const user = req.user;
      const userDetail = await getBasketOfUser(user._id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: {
          message: "سبد خرید شما با موفقیت بازگردانی شد",
          userDetail,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

const ProfileController = new Profile();

module.exports = ProfileController;
