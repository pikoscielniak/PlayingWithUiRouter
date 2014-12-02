'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /state1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/state1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/state1');
    });


    it('should render state1 when user navigates to /state1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/state2');
    });


    it('should render state2 when user navigates to /state2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
