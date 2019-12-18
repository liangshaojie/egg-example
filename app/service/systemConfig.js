/*
 * @Author: doramart 
 * @Date: 2019-06-24 13:20:49 
 * @Last Modified by: doramart
 * @Last Modified time: 2019-08-17 21:01:44
 */


'use strict';
const Service = require('egg').Service;

const _ = require('lodash')


const {
    _list
} = require('./general');

class SystemConfigService extends Service {
    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        let listdata = _list(this.ctx.model.SystemConfig, payload, {
            query: query,
            searchKeys: searchKeys,
            populate: populate,
            files
        });
        return listdata;
    }
}

module.exports = SystemConfigService;