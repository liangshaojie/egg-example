'use strict';
const Service = require('egg').Service;
const path = require('path')

const {
    _item,
} = require(path.join(process.cwd(), 'app/service/general'));
class AdsService extends Service {
    async item(res, params = {}) {
        var ss = _item(res, this.ctx.model.Ads, params)
        console.log(ss)
        debugger
        return _item(res, this.ctx.model.Ads, params)
    }
}

module.exports = AdsService;