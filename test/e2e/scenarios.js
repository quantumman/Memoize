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

  describe('Open a note', function() {

    beforeEach(function() {
      clickNavbarItem('新しい投稿');

      element(by.repeater('note in notes').row(1))
        .element(by.css('.content-header a'))
        .click();
    });

    it('should open a note', function() {
      expect(element(by.css('#markdown')).getText()).not.toBeNull();
      expect(element(by.css('#markdown')).getText()).toBeDefined();
    });

    it('should edit a note', function() {
      element(by.css('#edit-note')).click();

      var textarea = element(by.model('note.content')).clear();
      textarea.sendKeys('ABCD');
      expect(textarea.getAttribute('value')).toBe('ABCD');

      var preview = element(by.css('#markdown-preview'));
      expect(preview.getText()).toBe('ABCD');
    });

    it('should provide Save button while editing a note', function() {
      // Before open editor
      expect(element(by.css('#contextual-action-button')).getText()).toBe('書く');

      // Open editor
      element(by.css('#edit-note')).click();
      expect(element(by.css('#contextual-action-button')).getText()).toBe('保存');
    });
  });
});
