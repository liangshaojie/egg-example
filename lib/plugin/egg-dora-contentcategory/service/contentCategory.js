'use strict';
const Service = require('egg').Service;
const path = require('path')

class ContentCategoryService extends Service {
    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        console.log("进入这个方法了")
        // let listdata = _list(this.ctx.model.ContentCategory, payload, {
        //     query: query,
        //     searchKeys: searchKeys,
        //     populate: populate,
        //     files,
        //     sort: {
        //         sortId: 1
        //     }
        // });
        // return listdata;

    }
}

module.exports = ContentCategoryService;