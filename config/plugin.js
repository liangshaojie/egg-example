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

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};


exports.doraContentTemp = {
    enable: true,
    package: 'egg-dora-contenttemp',
    path: path.join(__dirname, "../lib/plugin/egg-dora-contenttemp")
};