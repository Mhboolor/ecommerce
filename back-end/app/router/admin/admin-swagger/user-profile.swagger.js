/**
 * @swagger
 *  /profile/bookmark-blog : 
 *      get : 
 *          tags : [UserProfile]
 *          summary : get bookmark blog of user
 *          responses : 
 *              200 : 
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/GetBookmarked'
 */
/**
 * @swagger
 *  /profile/bookmark-product : 
 *      get : 
 *          tags : [UserProfile]
 *          summary : get bookmark product of user
 *          responses : 
 *              200 : 
 *                  description : success
 *                  content : 
 *                      application/json :
 *                              schema :
 *                                  $ref : '#/definitions/GetBookmarkedProduct'
 */
/**
 * @swagger
 *  /profile/basket : 
 *      get : 
 *          tags : [UserProfile]
 *          summary : get basket of user
 *          responses : 
 *              200 : 
 *                  description : success
 *                  content : 
 *                      application/json :
 *                              schema :
 *                                  $ref : '#/definitions/Basket'
 */