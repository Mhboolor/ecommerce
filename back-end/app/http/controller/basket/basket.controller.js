const { StatusCodes: HttpStatus } = require("http-status-codes");
const {
  copyObject,
  checkExistProduct,
} = require("../../../utils/functions.utils");
const UserModel = require("../../models/user/user.model");
const Controller = require("../controller");
const createHttpError = require("http-errors");

class Basket extends Controller {
  async addProductInBasket(req, res, next) {
    const { productID } = req.params;
    const user = req.user;
    await checkExistProduct(productID);
    const product = await findProductInBasket(user._id, productID);
    let message;
    if (product) {
      await UserModel.updateOne(
        {
          _id: user._id,
          "basket.products.productID": productID,
        },
        {
          $inc: {
            "basket.products.$.count": 1,
          },
        }
      );
      message = "یک عدد به محصول مورد نظر داخل سبد خرید شما اضافه شد";
    } else {
      await UserModel.updateOne(
        { _id: user._id },
        {
          $push: {
            "basket.products": {
              productID,
              count: 1,
            },
          },
        }
      );
      message = "محصول مورد نظر با موفقیت به سبد خرید شما اضافه شد";
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  }
  async removeProductFromBasket(req, res, next) {
    const { productID } = req.params;
    const user = req.user;
    await checkExistProduct(productID);
    const product = await findProductInBasket(user._id, productID);
    let message;
    if (product.count > 1) {
      await UserModel.updateOne(
        {
          _id: user._id,
          "basket.products.productID": productID,
        },
        {
          $inc: {
            "basket.products.$.count": -1,
          },
        }
      );
      message = "یک عدد از محصول مورد نظر داخل سبد خرید شما کم شد";
    } else {
      await UserModel.updateOne(
        { _id: user._id },
        {
          $pull: {
            "basket.products": {
              productID,
            },
          },
        }
      );
      message = "محصول مورد نظر از سبد خرید شما حذف شد";
    }
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: {
        message,
      },
    });
  }
}

async function findProductInBasket(userID, productID) {
  const findResult = await UserModel.findOne(
    { _id: userID, "basket.products.productID": productID },
    { "basket.products.$": 1 }
  );
  const userDetail = copyObject(findResult);
  return userDetail?.basket?.products?.[0];
}

const BasketController = new Basket();
module.exports = BasketController;
