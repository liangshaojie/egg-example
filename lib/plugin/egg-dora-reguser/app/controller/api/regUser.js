const validator = require('validator');
const _ = require('lodash');
const shortid = require('shortid');
const jwt = require('jsonwebtoken');

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

    /**
     * @api {post} /api/user/doLogin 用户登录
     * @apiDescription 用户登录
     * @apiName doLogin
     * @apiGroup User
     * @apiParam {string} phoneNum 手机号（eq:15220064294）
     * @apiParam {string} countryCode 国家代码（eq: 86）
     * @apiParam {string} email 用户邮箱(xx@qq.com)
     * @apiParam {string} loginType 登录类型 (1:手机验证码登录 2:手机号密码登录 3:邮箱密码登录,4:邮箱验证码登录)
     * @apiParam {string} messageCode 手机验证码(eq: 123456)
     * @apiParam {string} password 密码 // 非必填，与短信验证码选其一
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *  {
     *    data: {
     *      comments: ""
     *      date: "2018-11-13 12:09:29"
     *      email: "doramart@qq.com"
     *      enable: true
     *      group: "0"
     *      id: "zwwdJvLmP"
     *      logo: "/upload/images/defaultlogo.png"
     *      userName: "doramart"
     *      token: "eyJkYXRhIjp7InVzZXJJZCI6Inp3d2RKdkxtUCIsInBob25lTnVtIjoxNTIyMDA2NDI5NH0sImNyZWF0ZWQiOjE1NDI2NDMyNTAsImV4cCI6MzYwMH0=.SW3JVAjkQUX0mgrSBuOirB3kQV6NNatlc4j/qW7SxTM="
     *    } 
     *    message: "登录成功"
     *    server_time: 1542089573405
     *    status: 200
     *  }  
     * @apiError {json} result
     * @apiErrorExample {json} Error-Response:
     *  {
     *    data: {}
     *    message: "验证码错误"
     *    server_time: 1542082677922
     *    status: 500
     *  }
     * @apiSampleRequest http://localhost:8080/api/user/doLogin
     * @apiVersion 1.0.0
     */

    async loginAction(ctx, app) {
        try {
            // 获取body传过来的字段
            let fields = ctx.request.body || {};
            let errMsg = '',
                loginType = fields.loginType || '1'; // 1:手机验证码登录 2:手机号密码登录 3:邮箱密码登录

            // TODO 临时兼容没有改动的APP端
            if (fields.phoneNum && fields.password) {
                loginType = 2;
            }

            if (fields.email && fields.password) {
                loginType = 3;
            }

            if (loginType != '1' && loginType != '2' && loginType != '3' && loginType != '4') {
                throw new Error(ctx.__('validate_error_params'));
            }

            if (loginType == '1' || loginType == '2') {

                if (!fields.phoneNum || !validatorUtil.checkPhoneNum((fields.phoneNum).toString())) {
                    errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_phoneNum")])
                }

                if (!fields.countryCode) {
                    errMsg = ctx.__("validate_selectNull", [ctx.__("label_user_countryCode")]);
                }

                if (loginType == '2') {
                    if (!validatorUtil.checkPwd(fields.password, 6, 12)) {
                        errMsg = ctx.__("validate_rangelength", [ctx.__("label_user_password"), 6, 12])
                    }
                } else if (loginType == '1') {

                    let currentCode = await this.getCacheValueByKey(app.config.session_secret + '_sendMessage_login_' + (fields.countryCode + fields.phoneNum));
                    if (!fields.messageCode || !validator.isNumeric((fields.messageCode).toString()) || (fields.messageCode).length != 6 || currentCode != fields.messageCode) {
                        errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_imageCode")])
                    }
                }

            } else if (loginType == '3') {
                if (!validatorUtil.checkEmail(fields.email)) {
                    errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_email")]);
                }
                if (!validatorUtil.checkPwd(fields.password, 6, 12)) {
                    errMsg = ctx.__("validate_rangelength", [ctx.__("label_user_password"), 6, 12])
                }
            } else if (loginType == '4') {
                if (!validatorUtil.checkEmail(fields.email)) {
                    errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_email")]);
                }
                let currentCode = await this.getCacheValueByKey(app.config.session_secret + '_sendMessage_login_' + fields.email);
                if (!fields.messageCode || !validator.isNumeric((fields.messageCode).toString()) || (fields.messageCode).length != 6 || currentCode != fields.messageCode) {
                    errMsg = ctx.__("validate_inputCorrect", [ctx.__("label_user_imageCode")])
                }
            }

            if (errMsg) {
                throw new Error(errMsg);
            }

            let queryUserObj = {
                $or: [{
                    phoneNum: fields.phoneNum
                }, {
                    phoneNum: '0' + fields.phoneNum
                }],
                countryCode: fields.countryCode
            };

            if (loginType != '3' && loginType != '4' && fields.phoneNum.indexOf('0') == '0') {
                queryUserObj = {
                    $or: [{
                        phoneNum: fields.phoneNum
                    }, {
                        phoneNum: fields.phoneNum.substr(1)
                    }],
                    countryCode: fields.countryCode
                };
            }

            let userObj = {};
            if (loginType == '1') {
                _.assign(userObj, queryUserObj)
            } else if (loginType == '2') {
                _.assign(userObj, queryUserObj, {
                    password: ctx.helper.encrypt(fields.password, app.config.encrypt_key)
                })
            } else if (loginType == '3') {
                _.assign(userObj, {
                    email: fields.email
                }, {
                    password: ctx.helper.encrypt(fields.password, app.config.encrypt_key)
                })
            } else if (loginType == '4') {
                _.assign(userObj, {
                    email: fields.email
                })
                queryUserObj = {
                    email: fields.email
                }
            }

            // 初级校验
            let userCount = await ctx.service.user.count(queryUserObj);
            if (userCount > 0 || loginType == '2' || loginType == '3') {
                // 校验登录用户合法性
                let user = await ctx.service.user.item(ctx, {
                    query: userObj,
                    files: getAuthUserFields('login')
                })

                if (_.isEmpty(user)) {
                    if (loginType == '2') {
                        throw new Error(ctx.__('validate_login_notSuccess_1'));
                    } else {
                        throw new Error(ctx.__('validate_login_notSuccess'));
                    }
                }
                if (!user.enable) {
                    throw new Error(ctx.__("validate_user_forbiden"));
                }

                if (!user.loginActive) {
                    // 修改登录激活状态
                    await ctx.service.user.update(ctx, user._id, {
                        loginActive: true
                    })
                }

                let renderUser = JSON.parse(JSON.stringify(user));

                // 针对 App 端同时创建 Token
                renderUser.token = jwt.sign({
                    userId: user._id
                }, app.config.encrypt_key, {
                    expiresIn: '30day'
                })

                // 将cookie存入缓存
                ctx.cookies.set('api_' + app.config.auth_cookie_name, renderUser.token, {
                    path: '/',
                    maxAge: 1000 * 60 * 60 * 24 * 30,
                    signed: true,
                    httpOnly: true
                }); //cookie 有效期30天

                // 重置验证码
                let endStr = loginType == '3' ? fields.email : (fields.countryCode + fields.phoneNum);
                ctx.helper.clearRedisByType(endStr, '_sendMessage_login_');
                // console.log('--111---',renderUser)
                ctx.helper.renderSuccess(ctx, {
                    data: renderUser,
                    message: ctx.__("validate_user_loginOk")
                });
            } else {
                console.log('No user,create new User');
                // 没有该用户数据，新建该用户
                let createUserObj = {
                    group: '0',
                    creativeRight: false,
                    loginActive: true,
                    birth: '1770-01-01',
                    enable: true
                };

                if (loginType == '1') {
                    createUserObj.phoneNum = fields.phoneNum;
                    createUserObj.countryCode = fields.countryCode;
                    createUserObj.userName = fields.phoneNum;
                } else if (loginType == '4') {
                    createUserObj.email = fields.email;
                    createUserObj.userName = fields.email;
                }

                let currentUser = await ctx.service.user.create(createUserObj);
                let newUser = await ctx.service.user.item(ctx, {
                    query: {
                        _id: currentUser._id
                    },
                    files: getAuthUserFields('login')
                })
                let renderUser = JSON.parse(JSON.stringify(newUser));

                renderUser.token = jwt.sign({
                    userId: renderUser._id
                }, app.config.encrypt_key, {
                    expiresIn: '30day'
                })
                ctx.cookies.set('api_' + app.config.auth_cookie_name, renderUser.token, {
                    path: '/',
                    maxAge: 1000 * 60 * 60 * 24 * 30,
                    signed: true,
                    httpOnly: true
                });

                // 重置验证码
                let endStr = loginType == '3' ? fields.email : (fields.countryCode + fields.phoneNum);
                ctx.helper.clearRedisByType(endStr, '_sendMessage_login_');
                ctx.helper.renderSuccess(ctx, {
                    data: renderUser,
                    message: ctx.__("validate_user_loginOk")
                });

            }
        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    }


}

module.exports = RegUserController;