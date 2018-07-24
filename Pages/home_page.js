//var login_btn = "//button[@id=\"login-button\"]";
var sign_in = function () {
    this.sign_in = function () {
       //  var ec = browser.ExpectedConditions;
       //  browser.wait(ec.presenceOf(element(by.id('login-button'))), 10000);
       // // driverutil.waitfor(condition, 19999)
        element(by.id('login-button')).click();
    };
};
module.exports = new sign_in();