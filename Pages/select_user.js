var external_user = "//span[contains(text(),\"Schlumberger Access (external user\")]";
var select_user_type = function () {
    this.select_a_external_user = function () {
        var ec = browser.ExpectedConditions;
        browser.wait(ec.visibilityOf(element(by.xpath("//span[contains(text(),\"Schlumberger Access (external user\")]"))), 10000);
        element(by.xpath(external_user)).click();
    };
};
module.exports = new select_user_type();