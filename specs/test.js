/*
beforeEach(function () {
 browser.get(browser.params.common.url);
 browser.driver.manage().window().maximize();
 browser.driver.sleep(4000);
 browser.ignoreSynchronization = true;
 console.log("Test case started")
 // base.non_angular_waits();

 });
afterEach(function(){
 console.log("Test case ended")
 })
*/



describe("Login Functionality",function(){

        browser.ignoreSynchronization = true;

        /*beforeEach(function () {
            browser.get(browser.params.common.url);
            browser.driver.manage().window().maximize();
            browser.driver.sleep(4000);
            browser.ignoreSynchronization = true;
            console.log("Test case started")
            // base.non_angular_waits();

        });
*/
        /*afterEach(function(){
            console.log("Test case ended")
        })*/

        /*it("Registration",function () {

            browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")

            var element = require('../ElementLocators/Elements.json')

            browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")

           /!* browser.get(browser.params.common.url);
            browser.driver.manage().window().maximize();
            browser.driver.sleep(4000);
            browser.ignoreSynchronization = true;*!/

            browser.findElement(by.partialLinkText(browser.params.testdata.login.login_register)).click()
            // browser.findElement(by.partialLinkText("Don\'t have an account?")).click();
            browser.driver.sleep(4000)


           // browser.findElement(by.xpath("//a[text()='Login to your account']")).click()

            browser.findElement(by.name('firstname')).sendKeys(browser.params.registration.firstName)
            browser.findElement(by.name('lastname')).sendKeys(browser.params.registration.lastName)
            browser.findElement(by.name('email')).sendKeys(element.registration.register_email)
            browser.driver.sleep(4000)
            browser.findElement(by.name('password')).sendKeys(browser.params.registration.password)
            browser.findElement(by.name('confirm_password')).sendKeys(browser.params.registration.password)
            browser.driver.sleep(10000)
            browser.findElement(by.xpath('//label[text()="Agree with the Terms & Conditions."]')).click()
            browser.driver.sleep(4000)
           // browser.findElement(by.className('button btn btn-primary btn-large')).click()
           // browser.driver.sleep(4000)

           // browser.findElement(by.partialLinkText('Login to your account')).click()
           browser.findElement(by.xpath("//a[text()='Login to your account']")).click()
           // browser.findElement(by.xpath("//a[text()='Login to your account']")).click()
            //a[text()='Login to your account']

            browser.driver.sleep(4000)

        });*/

        /*it("Login to your account",function(){
            browser.findElement(by.name('email')).clear()
            browser.findElement(by.name('email')).sendKeys(browser.params.login.username)


            browser.findElement(by.name('password')).clear()
            browser.findElement(by.name('password')).sendKeys(browser.params.login.password)
            browser.findElement(by.className("button btn btn-success btn-large")).click()
            browser.driver.sleep(4000)
            browser.findElement(by.xpath("//a[contains(text(),' Welcome Asik! ')]")).click()
            browser.driver.sleep(4000)
            browser.findElement(by.xpath("//a[text()='Logout']")).click()
            browser.driver.sleep(4000)


        })*/

    it("Login to your account",function(){
        //using locators from Elements.json file

        var element = require('../ElementLocators/Elements.json')

        browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")
        browser.findElement(by.name(browser.params.testdata.login.login_username)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_username)).sendKeys('testingworldindia@gmail.com')


        browser.findElement(by.name(browser.params.testdata.login.login_password)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_password)).sendKeys('testing')
        browser.findElement(by.className("button btn btn-success btn-large")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text(),' Welcome Asik! ')]")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[text()='Logout']")).click()
        browser.driver.sleep(4000)
        expect("Testing").toBe("Testing")


    })

    it("Test 1 Login to your account",function(){
        //using locators from Elements.json file

        var element = require('../ElementLocators/Elements.json')

        browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")
        browser.findElement(by.name(browser.params.testdata.login.login_username)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_username)).sendKeys('testingworldindia@gmail.com')


        browser.findElement(by.name(browser.params.testdata.login.login_password)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_password)).sendKeys('testing')
        browser.findElement(by.className("button btn btn-success btn-large")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text(),' Welcome Asik! ')]")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[text()='Logout']")).click()
        browser.driver.sleep(4000)
        expect("Testing").toBe("Testing")



    })

    it("Test 2 Login to your account",function(){
        //using locators from Elements.json file

        var element = require('../ElementLocators/Elements.json')

        browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")
        browser.findElement(by.name(browser.params.testdata.login.login_username)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_username)).sendKeys('testingworldindia@gmail.com')


        browser.findElement(by.name(browser.params.testdata.login.login_password)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_password)).sendKeys('testing')
        browser.findElement(by.className("button btn btn-success btn-large")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text(),' Welcome Asik! ')]")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[text()='Logout']")).click()
        browser.driver.sleep(4000)
        expect("Testing").toBe("Testing1")



    })

    it("Test 3 Login to your account",function(){
        //using locators from Elements.json file

        var element = require('../ElementLocators/Elements.json')

        browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")
        browser.findElement(by.name(browser.params.testdata.login.login_username)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_username)).sendKeys('testingworldindia@gmail.com')


        browser.findElement(by.name(browser.params.testdata.login.login_password)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_password)).sendKeys('testing')
        browser.findElement(by.className("button btn btn-success btn-large")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text(),' Welcome Asik! ')]")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[text()='Logout']")).click()
        browser.driver.sleep(4000)


    })

    it("Test 4 Login to your account",function(){
        //using locators from Elements.json file

        var element = require('../ElementLocators/Elements.json')

        browser.get("http://amasik.com/demo/angularjs/angular-app/#/login")
        browser.findElement(by.name(browser.params.testdata.login.login_username)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_username)).sendKeys('testingworldindia@gmail.com')


        browser.findElement(by.name(browser.params.testdata.login.login_password)).clear()
        browser.findElement(by.name(browser.params.testdata.login.login_password)).sendKeys('testing')
        browser.findElement(by.className("button btn btn-success btn-large")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[contains(text(),' Welcome Asik! ')]")).click()
        browser.driver.sleep(4000)
        browser.findElement(by.xpath("//a[text()='Logout']")).click()
        browser.driver.sleep(4000)


    })



    })





