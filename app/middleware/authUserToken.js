const {
    authToken
} = require('@utils');
const _ = require('lodash')
module.exports = (options, app) => {
    return async function authUserToken(ctx, next) {
        try {
            ctx.session.user = "";
            let userToken = ctx.cookies.get('api_' + app.config.auth_cookie_name);
            if (userToken) {
                let checkToken = await authToken.checkToken(userToken, app.config.encrypt_key);
                if (checkToken) {
                    if (typeof checkToken == 'object') {
                        let targetUser = await ctx.service.user.item(ctx, {
                            query: {
                                _id: checkToken.userId,
                            },
                            files: getAuthUserFields('session')
                        });
                        if (!_.isEmpty(targetUser)) {
                            // console.log('user had login');
                            ctx.session.user = targetUser;
                            ctx.session.user.token = userToken;
                            ctx.session.logined = true;
                        }
                    }
                }
            }
            await next();
        } catch (error) {
            throw new Error(error);
        }

    }

}