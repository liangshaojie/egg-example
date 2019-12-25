'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')

const {
    _list,
    _count,
} = require(path.join(process.cwd(), 'app/service/general'));

class MessageService extends Service {

    async find(payload, {
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        let listdata = _list(this.ctx.model.Message, payload, {
            query: query,
            searchKeys: searchKeys,
            populate: !_.isEmpty(populate) ? populate : [{
                path: 'contentId',
                select: 'title stitle _id'
            }, {
                path: 'author',
                select: 'userName _id enable date logo'
            }, {
                path: 'replyAuthor',
                select: 'userName _id enable date logo'
            }, {
                path: 'adminAuthor',
                select: 'userName _id enable date logo'
            }, {
                path: 'adminReplyAuthor',
                select: 'userName _id enable date logo'
            }],
            files
        });
        return listdata;
    }
    async count(params = {}) {
        return _count(this.ctx.model.Message, params);
    }
}

module.exports = MessageService;