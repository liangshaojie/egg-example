'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash');
const pkg = require('../../../package.json')

class HomeController extends Controller {
    async getDataForIndexPage() {
        const ctx = this.ctx;
        ctx.query.current = ctx.params.current;
        ctx.tempPage = 'index.html';
        ctx.pageType = "index"
        await this.getPageData(this);
    }

    // 获取页面基础信息
    async getSiteInfo(ctx, appConfig) {
        let configs = await ctx.helper.reqJsonData('systemConfig/getConfig');
        const {
            siteName,
            siteDiscription,
            siteKeywords,
            siteAltKeywords,
            ogTitle,
        } = configs || [];

        let {
            title,
            des,
            keywords
        } = ctx.params;
        let pageTitle = title ? (title + ' | ' + siteName) : siteName;
        let discription = des ? des : siteDiscription;
        let key = keywords ? keywords : siteKeywords;
        let altkey = siteAltKeywords || '';
        return {
            title: pageTitle,
            ogTitle,
            discription,
            key,
            altkey,
            configs: configs || [],
            version: pkg.version,
            lang: ctx.session.locale,
            router: ctx.originalUrl.split('/')[1]
        }

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
        pageData.siteInfo = await this.getSiteInfo(ctx);
        debugger
        // pageData.staticRootPath = that.app.config.static.prefix

        this.ctx.body = {
            pageData
        }

    }
}

module.exports = HomeController;