var data = require("C:\\SLB\\POC_Protractor_Delfi-master\\Util\\test_data.json");

var continue_btn = "//button[text()='Continue']";
var login = function () {
    this.login_to_portal = function () {
        element(by.id('user')).sendKeys(data.login_page.test_data.user_id);

  //      driverutil.waitfor(ec1, 500);
        element(by.id('password')).sendKeys(data.login_page.test_data.password);
        element(by.xpath(continue_btn)).click();
//        driverutil.waitfor(ec2, 100000)


    };
};
// var driverUtil = function () {
//     this.waitFor() = function () {
//         if(broser = "edge") {
//             sleep (10000)
//         } else {
//             ec.waitfor(condition0)
//         }
//     }
// }
module.exports = new login();
