'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')

const {
    _count,
} = require(path.join(process.cwd(), 'app/service/general'));

class MessageService extends Service {
    async count(params = {}) {
        return _count(this.ctx.model.Message, params);
    }
}

module.exports = MessageService;