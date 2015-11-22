exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['specs/home-spec.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
};
