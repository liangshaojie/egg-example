const Axios = require("axios");
const _ = require('lodash')
module.exports = {
    async reqJsonData(url, params = {}, method = 'get') {
        let responseData, apiData = [];
        let targetUrl = '';
        // 后面再做处理  是否是管理端，是否是api
        targetUrl = url;
        if (url.indexOf('manage/') == '0') {
            targetUrl = this.app.config.server_path + '/' + url;
        } else if (url.indexOf('http') == '0') {
            targetUrl = url;
        } else {
            targetUrl = this.app.config.server_api + '/' + url
        }

        if (method === 'get') {
            responseData = await Axios.get(targetUrl, {
                params
            })
        } else if (method === 'post') {
            responseData = await Axios.post(targetUrl, params)
        }
        
        // 有响应体切状态码是200  返回数据，否则抛出一个错误
        if (responseData && responseData.status == '200' && !_.isEmpty(responseData.data) && responseData.data.status == 200) {
            return responseData.data.data;
        } else {
            throw new Error(responseData.data.message);
        }
    },
    // 成功渲染的方法
    renderSuccess(ctx, {
        data = {},
        message = ''
    } = {}) {
        ctx.body = {
            status: 200,
            data: data || {},
            message: message || '' 
        }
        ctx.status = 200;
    },
}