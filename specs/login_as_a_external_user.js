var base = require("../Pages/base_page.js");
var wait= require("C:\\SLB\\POC_Protractor_Delfi-master\\Util\\wait_util.js");
describe("Login as a External user", function () {

    beforeEach(function () {
       browser.ignoreSynchronization = true;
        // base.non_angular_waits();
        base.navigateToURL();
    });
    afterEach(function () {
       browser.close();
    });
    var log_out=require("../Pages/log_out_page");
    var login_as_External_user = require("../Business_Layer/login_bl.js");
    it("Checking Login functionality of External user", function (done) {
        login_as_External_user.login();
        base.getPageTitle();
        base.angular_waits();
        log_out.log_out_user();
        done();
    });
    var search = require("../Pages/search_page");
    it("searching the widgets", function (done) {
        login_as_External_user.login();
        search.search();
        base.angular_waits();
        log_out.log_out_user();
        done();
    });
});