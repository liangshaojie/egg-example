'use strict';

const mock = require('egg-mock');

describe('test/dora-reguser.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-reguser-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraReguser')
      .expect(200);
  });
});
