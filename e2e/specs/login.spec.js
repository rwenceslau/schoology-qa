let loginPage = require('../pages/login.po.js'),
    basePage = require('../pages/base.po.js');

Given('I am a user logging in on Schoology', async function () {
    await loginPage.getLoginUrl();
});

When('I fill the email with {string}', async function (string) {
    await loginPage.fillEmail(string);
});

When('I fill the password with {string}', async function (string) {
    await loginPage.fillPassword(string);
    await loginPage.clickBtnLogin();
});

Then('I should get to the home page path', async function () {
    await expect(basePage.getHomeUrlr()).to.eventually.equal('https://app.schoology.com/home');
});