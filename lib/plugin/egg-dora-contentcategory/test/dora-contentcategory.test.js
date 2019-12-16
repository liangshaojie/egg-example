'use strict';

const mock = require('egg-mock');

describe('test/dora-contentcategory.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-contentcategory-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraContentcategory')
      .expect(200);
  });
});
