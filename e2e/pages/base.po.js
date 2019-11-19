'use strict';

let EC = protractor.ExpectedConditions,
    //menu
    upgradeNavBarLink,
    coursesNavBarLink,
    groupsNavBarLink,
    resourcesNavBarLink,
    myCoursesLink;

module.exports = {
    init: () => {
        upgradeNavBarLink = element(by.partialButtonText('Upgrade'));
        coursesNavBarLink = element(by.partialButtonText('Courses'));
        groupsNavBarLink = element(by.partialButtonText('Groups'));
        resourcesNavBarLink = element(by.partialButtonText('Resources'));
        myCoursesLink = element(by.linkText('My Courses'));
    },

    getHomeUrlr: () => {
        return browser.getCurrentUrl();
    },

    clickUpgradeNavBarLink: () => {
        browser.wait(EC.visibilityOf(upgradeNavBarLink), 30000);
        return upgradeNavBarLink.click();
    },

    clickCoursesNavBarLink: () => {
        browser.wait(EC.visibilityOf(coursesNavBarLink), 30000);
        return coursesNavBarLink.click();
    },

    clickGroupsNavBarLink: () => {
        browser.wait(EC.visibilityOf(groupsNavBarLink), 30000);
        return groupsNavBarLink.click();
    },

    clickResourcesNavBarLink: () => {
        browser.wait(EC.visibilityOf(resourcesNavBarLink), 30000);
        return resourcesNavBarLink.click();
    },

    clickMyCoursesLink: () => {
        browser.wait(EC.visibilityOf(myCoursesLink), 30000);
        return myCoursesLink.click();
    }
};