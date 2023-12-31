const Joi = require("@hapi/joi");
const createHttpError = require("http-errors");

const CreateCommentValidation = Joi.object({
  comment: Joi.string().error(
    createHttpError.BadRequest("کامنت ارسالی صحیح نمی باشد")
  ),
  blogName: Joi.string().error(
    createHttpError.BadRequest("عنوان ارسالی مقاله صحیح نمی باشد")
  ),
  productName: Joi.string().error(
    createHttpError.BadRequest("عنوان ارسالی محصول صحیح نمی باشد")
  ),
});

module.exports = CreateCommentValidation;
