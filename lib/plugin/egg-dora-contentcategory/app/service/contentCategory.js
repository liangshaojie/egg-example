'use strict';
const Service = require('egg').Service;
const path = require('path')

// general是一个公共库，可用可不用
const {
    _list,
} = require(path.join(process.cwd(), 'app/service/general'));

class ContentCategoryService extends Service {
    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        let listdata = _list(this.ctx.model.ContentCategory, payload, {
            query: query,
            searchKeys: searchKeys,
            populate: populate,
            files,
            sort: {
                sortId: 1
            }
        });
        return listdata;
    }
}

module.exports = ContentCategoryService;