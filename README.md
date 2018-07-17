# Protractor
Reading Element Locators from json file
- Create locators in json file and read from them in spec files

HTML REport generation:
1. Install protractor-jasmine2-html-reporter package
npm install protractor-jasmine2-html-reporter --save-dev

2.  Add following details in protracor config file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


inside expots.config

   onPrepare: function() {
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
        })
    );
}
