'use strict';
const path = require("path")

/** @type Egg.EggPlugin */
// module.exports = {
//     // had enabled by egg
//     // static: {
//     //   enable: true,
//     // }
//     hello: {
//         enable: true,
//         path: path.resolve(__dirname, '../../lib/plugin/hello'),
//     }
// };


// add you build-in plugin here, example:
exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks',
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};


exports.doraContentTemp = {
    enable: true,
    package: 'egg-dora-contenttemp',
    path: path.join(__dirname, "../lib/plugin/egg-dora-contenttemp")
};

// doraTemplateConfigPluginBegin
exports.doraTemplateConfig = {
    enable: true,
    package: 'egg-dora-templateconfig',
    path: path.join(__dirname, "../lib/plugin/egg-dora-templateconfig")
};

// doraContentCategoryPluginBegin
exports.doraContentCategory = {
    enable: true,
    package: 'egg-dora-contentcategory',
    path: path.join(__dirname, "../lib/plugin/egg-dora-contentcategory")
};

// doraContentPluginBegin
exports.doraContent = {
    enable: true,
    package: 'egg-dora-content',
    path: path.join(__dirname, "../lib/plugin/egg-dora-content")
};

// doraContentMessagePluginBegin
exports.doraContentMessage = {
    enable: true,
    package: 'egg-dora-contentmessage',
    path: path.join(__dirname, "../lib/plugin/egg-dora-contentmessage")
};

// doraRegUserPluginBegin
exports.doraRegUser = {
    enable: true,
    package: 'egg-dora-reguser',
    path: path.join(__dirname, "../lib/plugin/egg-dora-reguser")
};