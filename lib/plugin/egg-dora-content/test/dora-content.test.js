'use strict';

const mock = require('egg-mock');

describe('test/dora-content.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-content-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraContent')
      .expect(200);
  });
});
