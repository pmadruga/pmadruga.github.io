describe('Blog page', function () {
  browser.get('/#/');

  it('should have a title', function () {
    expect(browser.getTitle()).toEqual('Pedro Madruga');
  });

  it('should go to "Blog" page upon contact button click', function () {
    element(by.id('expandMenuButton')).click();
    element(by.id('linkBlog')).click();
    expect(browser.get('/#/blog'));
  });

  it('should go to "Work" page upon contact button click', function () {
    element(by.id('expandMenuButton')).click();
    element(by.id('linkWork')).click();
    expect(browser.get('/#/work'));
  });

  it('should go to "Contact" page upon contact button click', function () {

    element(by.id('expandMenuButton')).click();
    element(by.id('linkContact')).click();
    expect(browser.get('/#/contact'));
  });

});

describe('Blog page', function () {
  browser.get('/#/blog');

  beforeEach(function () {
    browser.get('/#/blog');
  });

});

