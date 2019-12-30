'use strict';

module.exports = appInfo => {
    const config = exports = {
        keys: 'doracms',
        cluster: {
            listen: {
                port: 9090,
                hostname: '0.0.0.0',
            }
        },
        security: {
            csrf: {
                enable: false,
            }
        },
        // 加密解密
        session_secret: 'doracms_secret',
        auth_cookie_name: 'doracms',
        encrypt_key: 'dora',
        salt_aes_key: "doracms_",
        salt_md5_key: "dora",
        encryptApp_key: '751f621ea5c8f930',
        encryptApp_vi: '2624750004598718',
    };
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1575946728695_8972';
    // add your middleware config here  ['gzip', 'printdate']
    config.middleware = [];

    const userConfig = {
        // myAppName: 'egg',
        // 配置 gzip 中间件的配置
        gzip: {
            threshold: 1024, // 小于 1k 的响应体不压缩
        },
        printdate: {
            aaa: "aaa"
        },
        // nunjucks模板引擎
        view: {
            defaultViewEngine: 'nunjucks',
            mapping: {
                '.html': 'nunjucks',
            },
        },
    };

    return {
        ...config,
        ...userConfig,
    };
};