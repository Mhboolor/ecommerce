/**
 * @swagger
 *  components :
 *      schemas :
 *          GetOtp :
 *              type : object
 *              required :
 *                  -   mobile
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : the user mobile for sign up or sign in
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          CheckOtp :
 *              type : object
 *              required :
 *                  -   mobile
 *                  -   code
 *              properties :
 *                  mobile :
 *                      type : string
 *                      description : the user mobile for sign up or sign in
 *                  code :
 *                      type : integer
 *                      description : receive code from get otp
 */

/**
 * @swagger
 *  components :
 *      schemas :
 *          RefreshToken :
 *              type : object
 *              required :
 *                  -   refreshToken
 *              properties :
 *                  refreshToken :
 *                      type : string
 *                      description : create new access and refresh token
 */

/**
 * @swagger
 *  /auth/get-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : get otp code with mobile
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/GetOtp'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/GetOtpAuth'
 */

/**
 * @swagger
 *  /auth/check-otp :
 *      post :
 *          tags : [User Authentication]
 *          summary : check otp value in user controller
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/CheckOtp'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/CheckOtp'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/OTP'
 */

/**
 * @swagger
 *  /auth/get-me :
 *      get :
 *          tags : [User Authentication]
 *          summary : get information user
 *          responses :
 *              200 :
 *                  description : Success
 */

/**
 * @swagger
 *  /auth/refresh-token :
 *      post :
 *          tags : [User Authentication]
 *          summary : get new token and refresh token
 *          requestBody :
 *              required : true
 *              content :
 *                  application/x-www-form-urlencoded :
 *                      schema :
 *                          $ref : '#/components/schemas/RefreshToken'
 *                  application/json :
 *                      schema :
 *                          $ref : '#/components/schemas/RefreshToken'
 *          responses :
 *              201 :
 *                  description : Success - Created
 *                  content :
 *                      application/json :
 *                          schema :
 *                              $ref : '#/definitions/OTP'
 */
