/**
 * @swagger
 *  definitions :
 *      HomeDefinitions :
 *          type : object
 *          properties :
 *              statusCode :
 *                  type : integer
 *                  example : 20X
 */

/**
 * @swagger
 *  /store :
 *      get :
 *          tags : [Index Page]
 *          summary : index page or home page
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/HomeDefinitions'
 */
