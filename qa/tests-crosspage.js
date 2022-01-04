var Browser = require("zombie");
var assert = require("chai").assert;
var browser;
suite("Cross-Page Tests", function () {
  setup(function () {
    browser = new Browser();
  });

  // The test won't work as document.referrer returns an empty string.
  // See this issue(https://github.com/assaf/zombie/issues/908) from more details.
  // 
  // test("requesting a group rate quote from the hood river tour page should populate the referrer field", function (done) {
  //   var referrer = "http://localhost:3000/tours/hood-river";
  //   browser.visit(referrer, function () {
  //     browser.clickLink(".requestGroupRate", function () {
  //       assert.equal(browser.field("referrer").value, referrer);
  //       done();
  //     });
  //   });
  // });
  // test("requesting a group rate from the oregon coast tour page should populate the referrer field", function (done) {
  //   var referrer = "http://localhost:3000/tours/oregon-coast";
  //   browser.visit(referrer, function () {
  //     browser.clickLink(".requestGroupRate", function () {
  //       assert.equal(browser.field("referrer").value, referrer);
  //       done();
  //     });
  //   });sd
  // });
  // test(
  //   'visiting the "request group rate" page directly should result ' +
  //     "in an empty referrer field",
  //   function (done) {
  //     browser.visit(
  //       "http://localhost:3000/tours/request-group-rate",
  //       function () {
  //         assert.equal(browser.field("referrer").value, "");
  //         done();
  //       }
  //     );
  //   }
  // );
});
