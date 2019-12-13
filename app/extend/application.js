'use strict';
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

module.exports = {
    // 初始化数据模型
    initExtendModel(modelsPath) {
        let app = this;
        fs.readdirSync(modelsPath).forEach(function(extendName) {
            // console.log(`Init ${path.basename(extendName, '.js')} model success`);
            if (extendName) {
                let filePath = `${modelsPath}/${extendName}`;
                if (fs.existsSync(filePath)) {
                    let modelKey = path.basename(extendName.charAt(0).toUpperCase() + extendName.slice(1), '.js');
                    if (_.isEmpty(app.model[modelKey])) {
                        let targetModel = app.loader.loadFile(filePath);
                        // 加载要给模块可以用这种方式
                        app.model[modelKey] = targetModel;
                    }
                }
            }
        });
    },
    // 初始化插件路由
    async initPluginRouter(ctx, pluginConfig = {}, pluginManageController = {}, pluginApiController = {}) {
        let app = this;
        let isFontApi = false;
        let isAdminApi = false;
        let targetControllerName = '';
        let targetApiItem = {};
        if (!_.isEmpty(pluginConfig)) {
            let {
                adminApi,
                fontApi
            } = pluginConfig;
            let targetRequestUrl = ctx.request.url;
            console.log(targetRequestUrl)
            if (targetRequestUrl.indexOf('/api/') >= 0) {
                for (const fontApiItem of fontApi) {
                    let {
                        url,
                        method,
                        controllerName
                    } = fontApiItem;
                    let targetApi = targetRequestUrl.replace('/api/', '').split("?")[0];
                    if (ctx.request.method == method.toUpperCase() && targetApi === url && controllerName) {
                        isFontApi = true;
                        targetControllerName = controllerName;
                        targetApiItem = fontApiItem;
                        break;
                    }
                }
            } else if (targetRequestUrl.indexOf('/manage/') >= 0) {
                for (const adminApiItem of adminApi) {
                    let {
                        url,
                        method,
                        controllerName
                    } = adminApiItem;
                    let targetApi = targetRequestUrl.replace('/manage/', '').split("?")[0];
                    if (ctx.request.method == method.toUpperCase() && targetApi === url && controllerName) {
                        isAdminApi = true;
                        targetControllerName = controllerName;
                        targetApiItem = adminApiItem;
                        break;
                    }
                }
            }
        }

        if (isAdminApi && !_.isEmpty(pluginManageController) && targetControllerName) {
            await pluginManageController[targetControllerName](ctx, app);
        } else if (isFontApi && !_.isEmpty(pluginApiController) && targetControllerName) {
            if (targetApiItem.authToken) {
                if (ctx.session.logined) {
                    await pluginApiController[targetControllerName](ctx, app);
                } else {
                    ctx.helper.renderFail(ctx, {
                        message: ctx.__('label_notice_asklogin')
                    });
                }
            } else {
                await pluginApiController[targetControllerName](ctx, app);
            }
        }
    }
}