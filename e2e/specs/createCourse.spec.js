let basePage = require('../pages/base.po.js'),
    loginPage = require('../pages/login.po.js'),
    createCourse = require('../pages/createCourse.po.js');

Given('I am a user logged in on Schoology page', async function () {
    await loginPage.fillEmail('wenceslaurodrigo@gmail.com');
    await loginPage.fillPassword('rwtorres12');
    await loginPage.clickBtnLogin();
});

When('I click the Courses button in the header', async function () {
    await basePage.clickCoursesNavBarLink();
});

When('I click the My Courses Link in the inner menu', async function () {
    await basePage.clickMyCoursesLink();
});

When('I click the Create Course button in the Manage Courses section', async function () {
    await createCourse.clickManageCreateCoursesButton();
});

When('I fill {string} as the course name', async function (string) {
    await createCourse.fillCourseName(string + Math.random().toString(36).substr(1, 2));
});

When('I fill {string} as the section name', async function (string) {
    await createCourse.fillSectionName(string + Math.random().toString(36).substr(1, 2));
});

When('I select a valid subject area', async function () {
    await createCourse.selectSubject();
});

When('I select a valid level', async function () {
    await createCourse.selectLevel();
});

When('I click the Create button', async function () {
    await createCourse.saveCreatedCourse();
});

Then('I should see the recently created course label', async function () {
    await expect(createCourse.getCreatedCourseTitle()).to.eventually.have.string('Access Code');
});