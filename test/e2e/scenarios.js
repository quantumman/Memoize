'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Memoize', function() {

  beforeEach(function() {
    browser.get('app/index.html');
  });

  var clickNavbarItem = function(itemLabel) {
    element.all(by.css('.nav li')).filter(function(item) {
      return item.getText().then(function(text) {
        return text == itemLabel;
      });
    }).then(function(items) {
      items[0].click();
    });
  };

  it('should highlight a current navbar item', function() {
    var getActiveNavbarItems = function() {
      return element(by.id('app-menu')).all(by.css('.nav li.active'));
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

  it('should show a list of new posts', function() {
    clickNavbarItem('新しい投稿');

    var titleColumn = element.all(by.repeater('note in notes').column('{{note.title}}'));
    function getTitles () {
      return titleColumn.map(function(elem) {
        return elem.getText();
      });
    };

    expect(getTitles()).toEqual(["TEST \"TITLE\" #3", "TEST \"TITLE\" #1", "TEST \"TITLE\" #2"]);
  });
});
