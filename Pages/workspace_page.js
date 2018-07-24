var base = require("../Pages/base_page.js");
var workspace = function () {
    this.select_workspace = function () {

        //base.angular_waits();
        browser.sleep(10000);

        element(by.xpath("//div[@class='item-name'][contains(text(),'WORKSPACE')]")).click();
        //browser.actions().mouseMove(ele).click().perform();
        browser.sleep(2000);
        element(by.xpath("//p[@class='no-subscription ng-star-inserted']")).getText().then(function (text) {
            console.log(text);
        });
    };

};
module.exports = new workspace();