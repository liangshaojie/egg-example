'use strict';

const mock = require('egg-mock');

describe('test/dora-contenttemp.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-contenttemp-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraContenttemp')
      .expect(200);
  });
});
