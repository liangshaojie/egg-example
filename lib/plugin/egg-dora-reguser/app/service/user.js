'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')

// general是一个公共库，可用可不用
const {
    _count,
    _item,
    _create,
    _update,
} = require(path.join(process.cwd(), 'app/service/general'));

class UserService extends Service {

    async update(res, _id, payload) {
        return _update(res, this.ctx.model.User, _id, payload);
    }

    async create(payload) {
        return _create(this.ctx.model.User, payload);
    }

    async item(res, {
        query = {},
        populate = [],
        files = null
    } = {}) {
        return _item(res, this.ctx.model.User, {
            query: _.assign({
                state: '1'
            }, query),
            populate: !_.isEmpty(populate) ? populate : [{
                path: 'category',
                select: 'name _id'
            }],
            files: files ? files : '-password',
        })
    }

    async count(params = {}) {
        return _count(this.ctx.model.User, params);
    }
}

module.exports = UserService;