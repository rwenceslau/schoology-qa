var { setDefaultTimeout } = require('cucumber')
setDefaultTimeout(60 * 3200)
let loginPage = require('../pages/login.po.js');
let basePage = require('../pages/base.po.js');
let createCoursePage = require('../pages/createCourse.po.js');

Before(async function () {
    await browser.waitForAngularEnabled(false);
    await browser.get('/login');
    await loginPage.init();
    await basePage.init();
    await createCoursePage.init();
});
