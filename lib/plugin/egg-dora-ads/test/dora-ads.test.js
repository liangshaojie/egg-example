'use strict';

const mock = require('egg-mock');

describe('test/dora-ads.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-ads-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraAds')
      .expect(200);
  });
});
