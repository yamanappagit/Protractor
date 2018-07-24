var data = require("C:\\SLB\\POC_Protractor_Delfi-master\\Util\\test_data.json");
var base_page = function () {

    this.non_angular_waits = function () {
        browser.waitForAngularEnabled(false);
    };
    this.angular_waits = function () {
        browser.waitForAngularEnabled();
    };
    this.navigateToURL = function () {
        //browser.manage().timeouts().implicitlyWait(5000);
        browser.get(data.url);
        //browser.manage().window().maximize();
    };
    this.getPageTitle = function () {
        return browser.getTitle().then(function (title) {
            console.log('Title - ' + title);
        });
    }
};
module.exports = new base_page();