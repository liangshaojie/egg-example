'use strict';

const mock = require('egg-mock');

describe('test/dora-contentmessage.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dora-contentmessage-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, doraContentmessage')
      .expect(200);
  });
});
