'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');

class HomeController extends Controller {
    async getDataForIndexPage() {
        const ctx = this.ctx;
        ctx.query.current = ctx.params.current;
        ctx.tempPage = 'index.html';
        ctx.pageType = "index"
        ctx.body = 'hi, egg 5665';
        await this.getPageData(this);
    }
    async getPageData(that) {
        let { ctx } = that;
        let payload = ctx.params;
        let pageData = {
            pageType: ctx.pageType
        };
        let targetTempPage = ctx.tempPage;
        // 获取当前模板信息   在extend里面的方法
        let defaultTemp = await ctx.helper.reqJsonData('contentTemplate/getDefaultTempInfo');

        // 获取用户信息
        if (ctx.session.logined) {
            pageData.userInfo = ctx.session.user;
            pageData.logined = ctx.session.logined;
        }

        // 静态目录
        if (!_.isEmpty(defaultTemp)) {
            pageData.staticforder = defaultTemp.alias;
        } else {
            throw new Error(ctx.__('validate_error_params'));
        }

        // 所有页面都需要的基础数据
        pageData.cateTypes = await ctx.helper.reqJsonData('contentCategory/getList', payload);
        // pageData.siteInfo = await this.getSiteInfo(ctx);
        // pageData.staticRootPath = that.app.config.static.prefix

    }
}

module.exports = HomeController;