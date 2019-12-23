/*
 * @Author: doramart 
 * @Date: 2019-06-24 13:20:49 
 * @Last Modified by: doramart
 * @Last Modified time: 2019-11-13 21:39:01
 */

'use strict';
const Service = require('egg').Service;
const path = require('path')

// general是一个公共库，可用可不用
const {
    _item,
} = require(path.join(process.cwd(), 'app/service/general'));


class AdsItemService extends Service {
    async item(res, params = {}) {
        return _item(res, this.ctx.model.AdsItem, params)
    }
}

module.exports = AdsItemService;