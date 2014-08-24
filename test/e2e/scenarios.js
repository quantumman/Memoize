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
    expect(items.get(0).getText()).toBe('読む');

    clickNavbarItem('書く');
    items = getActiveNavbarItems();
    expect(items.count()).toBe(1);
    expect(items.get(0).getText()).toBe('書く');

    clickNavbarItem('読む');
    items = getActiveNavbarItems();
    expect(items.count()).toBe(1);
    expect(items.get(0).getText()).toBe('読む');
  });
});
