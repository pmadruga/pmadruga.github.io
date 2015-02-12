exports.config = {
  specs: ['../test/e2e/*.js'],
  baseUrl: 'http://localhost:9000',
  colors: true,
  maxSessions: 1,
  multiCapabilities: [
    /* Restricting tests to one browser for now, to save time */
    /*{
    browserName: 'chrome'
    }*/
    /*{
      browserName: 'firefox'
    },*/
    {
      browserName: 'safari'
    }
  ]
};
