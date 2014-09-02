'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Memoize', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  it('should highlight a current navbar item', function() {
    var getActiveNavbarItems = function() {
      return element(by.id('app-menu')).all(by.css('.nav li.active'));
    };

    var clickNavbarItem = function(itemLabel) {
      element.all(by.css('.nav li')).filter(function(item) {
        return item.getText().then(function(text) {
          return text == itemLabel;
        });
      }).then(function(items) {
        items[0].click();
      });
    };

    var items = getActiveNavbarItems();
    expect(items.count()).toBe(1);
    expect(items.get(0).getText()).toBe('新しい投稿');

    clickNavbarItem('編集リクエスト');
    items = getActiveNavbarItems();
    expect(items.count()).toBe(1);
    expect(items.get(0).getText()).toBe('編集リクエスト');

    clickNavbarItem('新しい投稿');
    items = getActiveNavbarItems();
    expect(items.count()).toBe(1);
    expect(items.get(0).getText()).toBe('新しい投稿');
  });
});
