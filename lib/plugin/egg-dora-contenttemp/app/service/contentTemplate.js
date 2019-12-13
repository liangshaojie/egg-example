'use strict';
const Service = require('egg').Service;
const path = require('path')

// general是一个公共库，可用可不用
const {
    // _list,
    _item,
    // _count,
    // _create,
    // _update,
    // _removes,
    // _safeDelete,
    // _updateMany
} = require(path.join(process.cwd(), 'app/service/general'));

class ContentTemplateService extends Service {
    async item(res, params = {}) {
        return _item(res, this.ctx.model.ContentTemplate, params)
    }
}

module.exports = ContentTemplateService;