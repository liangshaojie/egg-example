/**
 * nunjucks 自定义过滤器
 * 将您的过滤器添加到app/extend/filter.js，然后它们会自动注入到nunjucks
 */
const _ = require('lodash');

module.exports = {
    cutwords(str, n, dot = true) {
        if (!str) return '';
        var r = /[^\x00-\xff]/g;
        var m;
        if (str.replace(r, '**').length > n) {
            m = Math.floor(n / 2);
            for (var i = m, l = str.length; i < l; i++) {
                if (str.substr(0, i).replace(r, '**').length >= n) {
                    return str.substr(0, i);
                }
            }
        }
        if (dot)(str = str + '...')
        return str;
    },
}