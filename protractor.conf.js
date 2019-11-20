const path = require('path');
var os = require('os');

exports.config = {
    directConnect: true,
    
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['disable-infobars', '--disable-gpu']
        },
        metadata: {
            browser: {
                name: 'chrome',
                version: '78'
            },
            device: Object.is(os.platform(), 'darwin') ? 'Macbook' : Object.is(os.platform(), 'win32') ? 'Windows' : 'Linux',
            platform: {
                name: Object.is(os.platform(), 'darwin') ? 'osx' : Object.is(os.platform(), 'win32') ? 'windows' : 'linux',
                version: os.release()
            }
        },
        shardTestFiles: true
    },
    allScriptsTimeout: 10000,

    baseUrl: 'https://app.schoology.com/',

    specs: [
        './e2e/features/*.feature'
    ],

    restartBrowserBetweenTests: true,

    framework: 'custom', 
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    cucumberOpts: {
        require: [
            path.resolve(process.cwd(), './e2e/specs/*.js'),
            path.resolve(process.cwd(), './e2e/common/*.js')
        ],
        format: 'json:test_results/results.json',
        strict: true,
    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options: {

            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            displayDuration: true,
            durationInMS: true,
            pageTitle: 'Schoology Report e2e',
            pageFooter: '<div align="center"><p>Schoology Report e2e</p></div>',
            reportname: 'Schoology Report e2e',
            customData: {
                title: 'Run info',
                data: [
                    { label: 'Project', value: 'Schoology' },
                    { label: 'Technologies', value: 'Protractor and Cucumber' },
                ]
            },
        }
    }],
    
    onPrepare: function () {
        const { Given, Then, When, Before } = require('cucumber');
        const chai = require('chai');
        const chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        const expect = chai.expect;
   
        global.expect = expect;
        global.chai = chai;
        global.chaiAsPromised = chaiAsPromised;
        global.Given = Given;
        global.When = When;
        global.Then = Then;
        global.Before = Before;
    }
};