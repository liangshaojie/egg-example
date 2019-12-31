require('module-alias/register')
const Axios = require("axios");
const _ = require('lodash')
let crypto = require("crypto");

//邮件发送插件
let nodemailer = require("nodemailer");

const {
    siteFunc,
    cache
} = require('@root/app/utils/index.js');

module.exports = {
    // 封装请求 内部axios调用
    async reqJsonData(url, params = {}, method = 'get') {
        let responseData, apiData = [];
        let targetUrl = '';
        // 后面再做处理  是否是管理端，是否是api
        targetUrl = url;
        if (url.indexOf('manage/') == '0') {
            targetUrl = this.app.config.server_path + '/' + url;
        } else if (url.indexOf('http') == '0') {
            targetUrl = url;
        } else {
            targetUrl = this.app.config.server_api + '/' + url
        }

        if (method === 'get') {
            responseData = await Axios.get(targetUrl, {
                params
            })
        } else if (method === 'post') {
            responseData = await Axios.post(targetUrl, params)
        }

        // 有响应体切状态码是200  返回数据，否则抛出一个错误
        if (responseData && responseData.status == '200' && !_.isEmpty(responseData.data) && responseData.data.status == 200) {
            return responseData.data.data;
        } else {
            throw new Error(responseData.data.message);
        }
    },

    // 成功渲染的方法
    renderSuccess(ctx, {
        data = {},
        message = ''
    } = {}) {
        ctx.body = {
            status: 200,
            data: data || {},
            message: message || ''
        }
        ctx.status = 200;
    },
    renderFail(ctx, {
        message = '',
        data = {},
    } = {}) {
        if (message) {
            // throw new Error(message);
            if (message instanceof Object) {
                message = message.message;
            }
            ctx.body = {
                status: 500,
                message: message,
                data: data || {},
            }
            ctx.status = 200;
        } else {
            throw new Error(message);
        }

    },

    clearRedisByType(str, cacheKey) {
        console.log('cacheStr', str);
        let currentKey = this.config.session_secret + cacheKey + str;
        cache.set(currentKey, '', 2000);
    },
    // 密码加密
    encrypt(data, key) {
        let cipher = crypto.createCipher("bf", key);
        let newPsd = "";
        newPsd += cipher.update(data, "utf8", "hex");
        newPsd += cipher.final("hex");
        return newPsd;
    },
    // APP加密
    encryptApp(key, iv, data) {
        var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
        var cryped = cipher.update(data, 'utf8', 'binary');
        cryped += cipher.final('binary');
        cryped = new Buffer(cryped, 'binary').toString('base64');
        return cryped;
    },
    //密码解密
    decrypt(data, key) {
        let decipher = crypto.createDecipher("bf", key);
        let oldPsd = "";
        oldPsd += decipher.update(data, "hex", "utf8");
        oldPsd += decipher.final("utf8");
        return oldPsd;
    },
    // 发送邮件
    sendEmail(sysConfigs, key, obj = {}, callBack = () => {}) {

        let emailTitle = "Hello";
        let emailSubject = "Hello";
        let emailContent = "Hello";
        let toEmail;
        if (key == emailTypeKey.email_findPsd) {
            toEmail = obj.email;
            let oldLink = obj.password + '$' + obj.email + '$' + this.ctx.session_secret;
            let newLink = this.encrypt(oldLink, this.app.config.encrypt_key);

            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_activePwd_title");
            emailContent = siteFunc.setConfirmPassWordEmailTemp(this.ctx, sysConfigs, obj.userName, newLink);
        } else if (key == emailTypeKey.email_notice_contentMsg) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_recieveMsg_title");
            emailContent = siteFunc.setNoticeToAdminEmailTemp(this.ctx, sysConfigs, obj);
            toEmail = sysConfigs.siteEmail;
        } else if (key == emailTypeKey.email_notice_admin_byContactUs) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_recieveMsg_title");
            emailContent = siteFunc.setNoticeToAdminEmailByContactUsTemp(this.ctx, sysConfigs, obj);
            toEmail = sysConfigs.siteEmail;
        } else if (key == emailTypeKey.email_notice_user_contentMsg) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_notice_haveMsg");
            emailContent = siteFunc.setNoticeToUserEmailTemp(this.ctx, sysConfigs, obj);
            toEmail = obj.replyAuthor.email;
        } else if (key == emailTypeKey.email_notice_contentBug) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_notice_askBug");
            emailContent = siteFunc.setBugToAdminEmailTemp(this.ctx, sysConfigs, obj);
            toEmail = sysConfigs.siteEmail;
        } else if (key == emailTypeKey.email_notice_user_reg) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_notice_reg_success");
            emailContent = siteFunc.setNoticeToUserRegSuccess(this.ctx, sysConfigs, obj);
            toEmail = obj.email;
        } else if (key == emailTypeKey.email_notice_user_byContactUs) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_noticeuser_askInfo_success");
            emailContent = siteFunc.setNoticeToAdminEmailByContactUsTemp(this.ctx, sysConfigs, obj);
            toEmail = obj.email;
        } else if (key == emailTypeKey.email_sendMessageCode) {
            emailSubject = emailTitle = '[' + sysConfigs.siteName + '] ' + this.ctx.__("label_sendEmail_sendMessageCode_success");
            emailContent = siteFunc.setNoticeToUserGetMessageCode(this.ctx, sysConfigs, obj);
            toEmail = obj.email;
        }
        // 发送邮件 || this.decrypt(sysConfigs.siteEmailPwd, this.app.config.encrypt_key)
        let transporter = nodemailer.createTransport({
            service: sysConfigs.siteEmailServer,
            auth: {
                user: sysConfigs.siteEmail,
                pass: sysConfigs.siteEmailPwd
            }
        });
        let mailOptions = {
            from: sysConfigs.siteEmail, // sender address
            to: toEmail, // list of receivers
            subject: emailSubject, // Subject line
            text: emailTitle, // plaintext body
            html: emailContent // html body
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log('-----邮件发送失败：-----' + error);
                callBack('notCurrentEmail');
            } else {
                console.log('Message sent: ' + info.response);
                callBack();
            }
        });
    }

}