exports.config = {
  specs: ['../test/e2e/*.js'],
  baseUrl: 'http://localhost:9000',
  colors: true,
  multiCapabilities: [{
    browserName: 'chrome'
  },
    {
      browserName: 'firefox'
    },
    {
      browserName: 'safari'
    }
  ]
};
