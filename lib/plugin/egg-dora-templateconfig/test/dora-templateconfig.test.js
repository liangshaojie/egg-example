'use strict';

const mock = require('egg-mock');

describe('test/dora-templateconfig.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-templateconfig-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraTemplateconfig')
      .expect(200);
  });
});
