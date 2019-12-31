const validator = require('validator');
const _ = require('lodash');
const shortid = require('shortid');

const {
    cache,
    siteFunc,
    validatorUtil
} = require('@utils');
let RegUserController = {

    getCacheValueByKey(key) {
        return new Promise((resolve, reject) => {
            cache.get(key, (targetValue) => {
                if (targetValue) {
                    resolve(targetValue)
                } else {
                    resolve('');
                }
            })
        })
    },
    /**
     * @api {post} /api/user/sendVerificationCode 发送验证码
     * @apiDescription 发送验证码
     * @apiName sendVerificationCode
     * @apiGroup User
     * @apiParam {string} phoneNum 手机号(eq:15220064294)
     * @apiParam {string} countryCode 国家代码（eq: 86）
     * @apiParam {string} email  邮箱
     * @apiParam {string} messageType 发送验证码类别（0、注册 1、登录，2、忘记资金密码找回, 3、忘记密码，4、身份验证, 5、管理员登录，6、游客绑定邮箱或手机号）
     * @apiParam {string} sendType 发送验证码形式（1: 短信验证码  2:邮箱验证码）
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     * {
     *     "status": 200,
     *     "message": "send Code success",
     *     "server_time": 1542382533904,
     *     "data": {
     *         "messageCode": "378047"
     *     }
     * }  
     * @apiError {json} result
     * @apiErrorExample {json} Error-Response:
     *  {
     *    data: {}
     *    message: "验证码错误"
     *    server_time: 1542082677922
     *    status: 500
     *  }
     * @apiSampleRequest http://localhost:9090/api/user/sendVerificationCode
     * @apiVersion 1.0.0
     */

    async sendVerificationCode(ctx, app) {
        try {
            let fields = ctx.request.body || {};
            let phoneNum = fields.phoneNum;
            let email = fields.email;
            let countryCode = fields.countryCode;
            let messageType = fields.messageType;
            let sendType = fields.sendType || '1'; // 1: 短信验证码  2:邮箱验证码

            // 针对管理员
            let userName = fields.userName;
            let password = fields.password;

            let cacheKey = '',
                errMsg = "";

            // 管理员登录
            if (messageType == '5') {

                if (!userName || !password) {
                    throw new Error(ctx.__('label_systemnotice_nopower'));
                }

                let targetAdminUser = await ctx.service.adminUser.item(ctx, {
                    query: {
                        userName,
                        password
                    }
                })

                if (!_.isEmpty(targetAdminUser)) {
                    phoneNum = targetAdminUser.phoneNum;
                    countryCode = targetAdminUser.countryCode;
                } else {
                    throw new Error(ctx.__('label_systemnotice_nopower'));
                }

            } else {

                if (sendType == '1') {
                    if (!phoneNum || !validator.isNumeric(phoneNum.toString())) {
                        errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_phoneNum")]);
                    }

                    if (!fields.countryCode) {
                        errMsg = ctx.__("validate_selectNull", [ctx.__("label_user_countryCode")]);
                    }
                } else if (sendType == '2') {
                    if (!validatorUtil.checkEmail(fields.email)) {
                        errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_email")]);
                    }
                }

            }

            if (!messageType) {
                errMsg = ctx.__("validate_error_params");
            }

            if (errMsg) {
                throw new Error(errMsg);
            }

            // 生成短信验证码
            let currentStr = siteFunc.randomString(6, '123456789');

            if (messageType == '0') { // 注册验证码
                cacheKey = '_sendMessage_reg_';
            } else if (messageType == '1') { // 登录获取验证码
                cacheKey = '_sendMessage_login_';
            } else if (messageType == '2') { // 忘记资金密码获取验证码
                cacheKey = '_sendMessage_reSetFunPassword_';
            } else if (messageType == '3') { // 忘记登录密码找回
                cacheKey = '_sendMessage_resetPassword_';
            } else if (messageType == '4') { // 身份认证
                cacheKey = '_sendMessage_identity_verification_';
            } else if (messageType == '5') { // 管理员登录
                cacheKey = '_sendMessage_adminUser_login_';
            } else if (messageType == '6') { // 游客绑定邮箱或手机号
                cacheKey = '_sendMessage_tourist_bindAccount_';
            } else {
                throw new Error(ctx.__("validate_error_params"));
            }

            let endStr = sendType == '1' ? (countryCode + phoneNum) : email;
            let currentKey = app.config.session_secret + cacheKey + endStr;
            console.log(currentStr, '---currentKey---', currentKey)
            cache.set(currentKey, currentStr, 1000 * 60 * 10); // 验证码缓存10分钟

            // 验证码加密
            let renderCode = ctx.helper.encryptApp(app.config.encryptApp_key, app.config.encryptApp_vi, currentStr);
            console.log('renderCode: ', renderCode);

            if (sendType == '1') {
                // 发送短消息
                (process.env.NODE_ENV == 'production') && siteFunc.sendTellMessagesByPhoneNum(countryCode, phoneNum, currentStr.toString());
            } else if (sendType == '2') {
                //发送通知邮件给用户
                const systemConfigs = await ctx.service.systemConfig.find({
                    isPaging: '0'
                });
                if (!_.isEmpty(systemConfigs)) {
                    // (process.env.NODE_ENV == 'production') && 
                    ctx.helper.sendEmail(systemConfigs[0], emailTypeKey.email_sendMessageCode, {
                        email: email,
                        renderCode: currentStr
                    })
                } else {
                    throw new Error(ctx.__('validate_error_params'));
                }
            } else {
                throw new Error(ctx.__('validate_error_params'));
            }

            ctx.helper.renderSuccess(ctx, {
                message: ctx.__('restful_api_response_success', [ctx.__('user_action_tips_sendMessage')]),
                data: {
                    messageCode: renderCode
                }
            });

        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    },

    /**
     * @api {post} /api/user/doReg 用户注册
     * @apiDescription 用户注册
     * @apiName doReg
     * @apiGroup User
     * @apiParam {string} regType 注册类型（1:手机号注册  2:邮箱注册）
     * @apiParam {string} phoneNum 手机号（eq:15220064294）
     * @apiParam {string} countryCode 国家代码（eq: 86）
     * @apiParam {string} messageCode 手机验证码/邮箱验证码(eq: 123456)
     * @apiParam {string} email 注册邮箱
     * @apiParam {string} password 密码
     * @apiParam {string} logo 用户头像
     * @apiParam {string} userName 用户名
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *{
     *    "status": 200,
     *    "message": "注册成功",
     *    "server_time": 1544246883076,
     *    "data": {}
     *}
     * @apiError {json} result
     * @apiErrorExample {json} Error-Response:
     *  {
     *    data: {}
     *    message: "注册失败"
     *    server_time: 1542082677922
     *    status: 500
     *  }
     * @apiSampleRequest http://localhost:8080/api/user/doReg
     * @apiVersion 1.0.0
     */
    async regAction(ctx, app) {
        try {
            let fields = ctx.request.body || {};
            let errMsg = '';
            let regType = fields.regType || '1'; // 1:手机号注册  2:邮箱注册
            if (regType != '1' && regType != '2') {
                throw new Error(ctx.__('validate_error_params'));
            }
            if (regType == '1') {
                if (!fields.phoneNum || !validatorUtil.checkPhoneNum((fields.phoneNum).toString())) {
                    errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_phoneNum")])
                }

                if (!fields.countryCode) {
                    errMsg = ctx.__("validate_selectNull", [ctx.__("label_user_countryCode")]);
                }
            } else if (regType == '2') {
                if (!validatorUtil.checkEmail(fields.email)) {
                    errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_email")]);
                }
            }

            let endStr = regType == '1' ? (fields.countryCode + fields.phoneNum) : fields.email;

            let currentCode = await this.getCacheValueByKey(app.config.session_secret + '_sendMessage_reg_' + endStr);

            if (!validator.isNumeric((fields.messageCode).toString()) || (fields.messageCode).length != 6 || currentCode != fields.messageCode) {
                errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_imageCode")])
            }

            if (fields.userName && !validator.isLength(fields.userName, 2, 12)) {
                errMsg = ctx.__("validate_rangelength", [ctx.__("label_user_userName"), 2, 12]);
            }

            if (fields.userName && !validatorUtil.isRegularCharacter(fields.userName)) {
                errMsg = ctx.__("validate_error_field", [ctx.__("label_user_userName")]);
            }

            if (!validatorUtil.checkPwd(fields.password, 6, 12)) {
                errMsg = ctx.__("validate_rangelength", [ctx.__("label_user_password"), 6, 12])
            }

            if (errMsg) {
                throw new Error(errMsg);
            }

            const userObj = {
                userName: fields.userName || fields.phoneNum,
                countryCode: fields.countryCode,
                logo: fields.logo,
                phoneNum: fields.phoneNum,
                email: fields.email,
                group: '0',
                creativeRight: false,
                password: ctx.helper.encrypt(fields.password, app.config.encrypt_key),
                loginActive: false,
                enable: true
            }

            let queryUserObj = {};
            if (regType == '1') {
                queryUserObj = {
                    $or: [{
                        phoneNum: fields.phoneNum
                    }, {
                        phoneNum: '0' + fields.phoneNum
                    }]
                };
                if (fields.phoneNum.indexOf('0') == '0') {
                    queryUserObj = {
                        $or: [{
                            phoneNum: fields.phoneNum
                        }, {
                            phoneNum: fields.phoneNum.substr(1)
                        }]
                    };
                }

            } else if (regType == '2') {
                queryUserObj = {
                    email: fields.email
                }
                userObj.userName = userObj.userName || fields.email;
            }
            let user = await ctx.service.user.item(ctx, {
                query: queryUserObj
            });
            if (!_.isEmpty(user)) {
                throw new Error(ctx.__("validate_hadUse_userNameOrEmail"));
            } else {
                let endUser = await ctx.service.user.create(userObj);
                ctx.session.user = await ctx.service.user.item(ctx, {
                    query: {
                        _id: endUser._id
                    },
                    files: getAuthUserFields('session')
                });

                // 重置验证码
                ctx.helper.clearRedisByType(endStr, '_sendMessage_reg_');

                ctx.helper.renderSuccess(ctx, {
                    message: ctx.__("validate_user_regOk")
                });
            }
        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    },


}

module.exports = RegUserController;