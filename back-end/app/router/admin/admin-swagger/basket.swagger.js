/**
 * @swagger
 *  /basket/add-product/{productID} :
 *      patch :
 *          tags : [Basket]
 *          summary : add product in basket
 *          parameters :
 *              -   in : path
 *                  name : productID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
/**
 * @swagger
 *  /basket/remove-product/{productID} :
 *      patch :
 *          tags : [Basket]
 *          summary : remove product from basket
 *          parameters :
 *              -   in : path
 *                  name : productID
 *                  type : string
 *                  required : true
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/DeleteAndUpdate'
 */
