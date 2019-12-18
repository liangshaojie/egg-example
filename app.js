const path = require('path');

class AppBootHook {
    constructor(app) {
        this.app = app;
    }

    configWillLoad() {
        this.app.loader.loadFile(path.join(this.app.config.baseDir, 'app/bootstrap/index.js'));
    }
}
module.exports = AppBootHook;