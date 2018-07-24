var base = require("../Pages/base_page.js");
var search_widget=function (){
    this.search=function (){
       //  browser.manage().timeouts().implicitlyWait(10000);
        base.angular_waits();
        var ec= browser.ExpectedConditions;
        browser.wait(ec.presenceOf(element(by.xpath("//h1[@class='product-tag'][contains(text(),'Domain Profiles')]"))),15000);
         //browser.waitForAngular();
       //  var elem= element(by.id('user-dropdown')).isDisplayed();
       //  expect(elem.isDisplayed()).toBe(true);
        element(by.id('catalogSearch')).sendKeys("drill");
        element.all(by.css('mat-card')).count().then(function (listOfElements) {
            console.log('Number of mat-card elements - ' + listOfElements);
        });


    };
};
    module.exports = new search_widget();