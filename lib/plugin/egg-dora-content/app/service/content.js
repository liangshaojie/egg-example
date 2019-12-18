'use strict';
const Service = require('egg').Service;
const path = require('path')
const _ = require('lodash')


const {
    _list,
} = require(path.join(process.cwd(), 'app/service/general'));

class ContentService extends Service {
    async find(payload, {
        sort = {
            updateDate: -1
        },
        query = {},
        searchKeys = [],
        populate = [],
        files = null
    } = {}) {
        let listdata = _list(this.ctx.model.Content, payload, {
            files: files,
            query: query,
            searchKeys: searchKeys,
            populate: !_.isEmpty(populate) ? populate : [{
                    path: 'author',
                    select: 'userName _id id logo'
                },
                {
                    path: 'uAuthor',
                    select: 'userName name logo _id group'
                },
                {
                    path: 'tags',
                    select: 'name _id'
                },
                {
                    path: 'categories',
                    select: 'name _id contentTemp enable defaultUrl',
                    populate: {
                        path: 'contentTemp'
                    }
                }
            ],
            sort: sort
        });
        return listdata;
    }
}
module.exports = ContentService;