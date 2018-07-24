var log_out_page=function () {
    this.log_out_user=function () {
        element(by.css('.user-profile')).click();
      //
        //  browser.sleep(5000);
     //   var ec= browser.ExpectedConditions;
   //    browser.wait(ec.visibilityOf(element(by.xpath("//slb-button[@class='sign-out-button']"))),15000);
       // browser.manage().timeouts().implicitlyWait(15000);
        element(by.xpath("//span[@class='ng-star-inserted'][contains(text(),'Sign Out')]")).click();

        //
    };
};
module.exports = new log_out_page();