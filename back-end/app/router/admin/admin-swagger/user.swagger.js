/**
 * @swagger
 *  components :
 *      schemas :
 *          UpdateProfile :
 *              type : object
 *              properties :
 *                  first_name :
 *                      type : string
 *                      description : first name of user
 *                  last_name :
 *                      type : string
 *                      description : last name of user
 *                  username :
 *                      type : string
 *                      description : username of user
 *                  email :
 *                      type : string
 *                      description : email of user
 *                  birthday :
 *                      type : string
 *                      description : birthday of user
 */
/**
 * @swagger
 *  components :
 *      schemas :
 *          ChangeRole :
 *              type : object
 *              properties :
 *                  id :
 *                      type : string
 *                      description : the id of user
 *                  role :
 *                      type : string
 *                      description : the role of user
 */

/**
 * @swagger
 *  /user/update-profile :
 *      patch :
 *          tags : [User]
 *          summary : update profile user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateProfile'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/UpdateProfile'
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
 *  /user/update-role :
 *      patch :
 *          tags : [User]
 *          summary : change role of user
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/ChangeRole'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/ChangeRole'
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
 *  /user/list :
 *      get :
 *          tags : [User]
 *          summary : get all users
 *          parameters :
 *              -   in : query
 *                  name : search
 *                  type : string
 *                  description: search in user first_name, last_name, username, mobile, email
 *          responses :
 *              200 :
 *                  description : success
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/AllUsers'
 */

/**
 * @swagger
 *  /user/ban/{id} :
 *      post :
 *          tags : [User]
 *          summary : ban user
 *          parameters :
 *              -   in : path
 *                  name : id
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
