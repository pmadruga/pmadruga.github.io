exports.config = {
  specs: ['../test/e2e/*.js'],
  baseUrl: 'http://localhost:9000',
  multiCapabilities: [{
    browserName: 'chrome'
  }]
}
