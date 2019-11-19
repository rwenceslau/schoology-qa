# Schoology Automation Assessment

Login and Create-a-couse happy path scenarios.

## Getting Started

### Installing

```
npm install
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

## Built With

* [Protractor](https://www.protractortest.org) - Automation testing framework
* [Cucumber](https://cucumber.io) - BDD Support
