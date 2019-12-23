let AdsController = {
    async getOne(ctx, app) {
        try {
            let name = ctx.query.name;
            debugger
            let targetItem = await ctx.service.ads.item(ctx, {
                query: {
                    name: name,
                    state: true
                },
                populate: [{
                    path: 'items'
                }]
            });
            ctx.helper.renderSuccess(ctx, {
                data: targetItem
            });
        } catch (err) {
            ctx.helper.renderFail(ctx, {
                message: err
            });
        }
    }
}

module.exports = AdsController;