describe('Main page', function () {
  browser.get('/#/');

  beforeEach(function () {
    browser.get('/#/');
  });

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Pedro Madruga');
  });

  it('should go to "Blog" page upon contact button click', function () {
    element(by.id('expandMenuButton')).click();
    element(by.id('linkBlog')).click();
    expect(browser.get('/#/blog'));
  });

  it('should go to "About" page upon contact button click', function () {
    element(by.id('expandMenuButton')).click();
    element(by.id('linkAbout')).click();
    expect(browser.get('/#/about'));
  });

  it('should go to "Contact" page upon contact button click', function () {

    element(by.id('expandMenuButton')).click();
    element(by.id('linkContact')).click();
    expect(browser.get('/#/contact'));
  });

  it('should check ng-bind-html', function() {
    expect(element(by.binding('post.text')).getText()).not.toBe(null)
  });

});

