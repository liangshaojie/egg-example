'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')

// general是一个公共库，可用可不用
const {
    _count,
} = require(path.join(process.cwd(), 'app/service/general'));

class UserService extends Service {
    async count(params = {}) {
        return _count(this.ctx.model.User, params);
    }
}

module.exports = UserService;