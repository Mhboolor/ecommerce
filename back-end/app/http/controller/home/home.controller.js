const Controller = require("../controller");
const { StatusCodes: HttpStatus } = require("http-status-codes");
class Page extends Controller {
  async indexPage(req, res, next) {
    try {
      res.status(HttpStatus.OK).json({
        message: "Home Page Store",
      });
    } catch (err) {
      next(err);
    }
  }
}

const HomePage = new Page();

module.exports = HomePage;
