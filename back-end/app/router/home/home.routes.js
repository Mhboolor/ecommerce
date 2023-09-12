const HomePage = require("../../http/controller/home/home.controller");

const HomeRoutes = require("express").Router();

HomeRoutes.get("/store", HomePage.indexPage);

module.exports = HomeRoutes;
