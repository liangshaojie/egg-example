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
        // console.log(defaultTemp)
        this.ctx.body = {
            "name": "liangshaoje",
            app: this.app
        }
    }
}

module.exports = HomeController;