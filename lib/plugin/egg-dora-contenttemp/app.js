const path = require('path');
class AppBootHook {


    constructor(app) {
        this.app = app;
    }

    beforeStart() {

    }

    configWillLoad() {
        this.app.config.middleware.push('contentTemplateRouter');
    }

    async didLoad() {
        // 数据模型初始化  path.resolve()换成绝对路径
        var modelsPath = path.resolve(__dirname, './app/model');
        console.log("didLoad:::" + modelsPath)
        this.app.initExtendModel(modelsPath);
    }
    async willReady() {

    }
}

module.exports = AppBootHook;