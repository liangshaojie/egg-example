const _ = require('lodash');

// const {
//     cache,
// } = require('../../utils');

let ContentTemplateController = {
    async getDefaultTempInfo(ctx, app) {
        let defaultTemp = await ctx.service.contentTemplate.item(ctx, {
            query: {
                'using': true
            },
            populate: ['items']
        })

        ctx.helper.renderSuccess(ctx, {
            data: {
                
            }
        });
        // if (!_.isEmpty(defaultTemp)) {
        //     // 缓存1天
        //     cache.set(app.config.session_secret + '_default_temp', defaultTemp, 1000 * 60 * 60 * 24);
        //     ctx.helper.renderSuccess(ctx, {
        //         data: defaultTemp
        //     });
        // } else {
        //     ctx.helper.renderSuccess(ctx, {
        //         data: {}
        //     });
        // }
    }
}

module.exports = ContentTemplateController;