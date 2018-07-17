//jshint strict:
var data = require("C:\\SLB\\POC_Protractor_Delfi-master\\Util\\test_data.json");

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


// noinspection JSAnnotator
exports.config = {
    directConnect: true,
    keepAlive: true,
    allScriptsTimeout: 90000,
    specs: [
      // "..\\specs\\*.js"
       "..\\specs\\test.js"
    ],
    //seleniumArgs: ['data.Drivers.IEDriver'],
   // seleniumAddress: 'http://localhost:4444/wd/hub',
    //SELENIUM_PROMISE_MANAGER: false,
  //  baseUrl: 'https://delfi.slb.com/',
    //  multiCapabilities: [{
    //      'browserName': 'chrome'
    //  }, {
    //  //    'browserName': 'firefox',
    //
    //  }],
    // // splitTestsBetweenCapabilities: true,
    capabilities: {
        'browserName': 'chrome',
      //  version: 'ANY'
      //    javascriptEnabled= true,
    },
     restartBrowserBetweenTests: true,
  //  useAllAngular5AppRoots: true,
    framework: 'jasmine2',
// baseUrl: 'http://localhost:8000/',
    onPrepare: function(){
        browser.manage().timeouts().implicitlyWait(15000);
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
        //browser.manage().window().maximize();
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        onComplete: null
        , showColors: true
        , includeStackTrace: true
    },

    /*params:
        {
            common:
                {
                    url:"http://amasik.com/demo/angularjs/angular-app/#/login",
                },
            registration:
                {
                    firstName:"Testing",
                    lastName:"World",
                    email:"testingworldindia@gmail.com",
                    password:"testing"
                },
            login:
                {
                    username:"testingworldindia@gmail.com",
                    password:"testing"
                }



        }*/
    params:
        {
            testdata: require('../ElementLocators/Elements.json')
        }
};
