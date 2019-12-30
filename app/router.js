'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  require('./router/home')(app);
  require('./router/api')(app);
  require('./router/users')(app);
};
