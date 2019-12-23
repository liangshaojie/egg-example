const path = require('path');

class AppBootHook {
    constructor(app) {
        this.app = app;
    }

    configWillLoad() {
        this.app.loader.loadFile(path.join(this.app.config.baseDir, 'app/bootstrap/index.js'));
        const ctx = this.app.createAnonymousContext();
        this.app.nunjucks.addExtension('remote', new remote(ctx));
    }
}
module.exports = AppBootHook;