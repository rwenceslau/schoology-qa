# Schoology Automation Assessment

Login and Create-a-couse happy path scenarios.

## Getting Started

### Installing

```
npm install
webdriver-manager update
```

### Running automation tests

```
node_modules/protractor/bin/protractor protractor.conf.js
```

For running specific scenarios, we can add tags as parameters:

```
node_modules/protractor/bin/protractor protractor.conf.js  --cucumberOpts.tags='@login'
node_modules/protractor/bin/protractor protractor.conf.js  --cucumberOpts.tags='@createCourse'
```
HTML reports are available after running under the folder:

```
test-reports/
```
## Built With

* [Protractor](https://www.protractortest.org) - Automation testing framework
* [Cucumber](https://cucumber.io) - BDD Support
* [Protractor-Cucumber-Html-Report](https://github.com/wswebcreation/protractor-multiple-cucumber-html-reporter-plugin) - Testing report
