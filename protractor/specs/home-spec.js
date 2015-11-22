describe('angularjs homepage todo list', function() {
  beforeEach(function() {
    browser.get('http://127.0.0.1:8080/#/home');
    browser.driver.manage().window().setSize(1024, 768);
  });
  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Home');
  });

  it('should have a top-toolbar-title', function() {
    expect(element(by.css('.top-toolbar-title')).getText()).toEqual('Home');
  });

  it('should have a page-header', function() {
    expect(element(by.css('.page-header')).getText()).toEqual('Home');
  });

});
