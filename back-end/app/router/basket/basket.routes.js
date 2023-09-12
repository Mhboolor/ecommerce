const BasketController = require("../../http/controller/basket/basket.controller");

const BasketRoutes = require("express").Router();

BasketRoutes.patch(
  "/add-product/:productID",
  BasketController.addProductInBasket
);
BasketRoutes.patch(
  "/remove-product/:productID",
  BasketController.removeProductFromBasket
);

module.exports = BasketRoutes;
