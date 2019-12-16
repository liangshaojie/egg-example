const _ = require('lodash');

let ContentCategoryController = {
    async list(ctx, app) {
        try {
            let payload = ctx.query;
            let queryObj = {
                enable: true
            };
            let contentCategoryList = await ctx.service.contentCategory.find({
                isPaging: '0'
            }, {
                query: queryObj
            });
            ctx.helper.renderSuccess(ctx, {
                data: contentCategoryList
            });
        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    },
}

module.exports = ContentCategoryController;