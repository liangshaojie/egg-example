'use strict';

const mock = require('egg-mock');

describe('test/dora-systemnotify.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-systemnotify-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraSystemnotify')
      .expect(200);
  });
});
