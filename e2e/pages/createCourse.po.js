'use strict';

let EC = protractor.ExpectedConditions,
    // buttons
    createCourseButton,
    manageCreateCourseButton,

    //fields
    fieldCourseName,
    fieldSectionName,
    fieldSubjectArea,
    fieldLevel,
    saveCourseButton,
    createdCourseTokenDiv;

module.exports = {
    init: () => {
        createCourseButton = element(by.partialButtonText('Create Course'));
        manageCreateCourseButton = element(by.css('[class="link-btn create-course-btn add popups-processed sExtlink-processed"]'));
        fieldCourseName = element(by.id('edit-course-name'));
        fieldSectionName = element(by.id('edit-section-name-1'));
        fieldSubjectArea = element(by.id('edit-subject-area'));
        fieldLevel = element(by.id('edit-grade-level-range-start'));
        saveCourseButton = element(by.id('edit-submit'));
        createdCourseTokenDiv = element(by.id('content-left'));
    },

    clickBtnCreateCourse: () => {
        browser.wait(EC.elementToBeClickable(createCourseButton), 30000);
        return createCourseButton.click();
    },

    clickManageCreateCoursesButton: () => {
        browser.wait(EC.elementToBeClickable(manageCreateCourseButton), 30000);
        return manageCreateCourseButton.click();
    },

    fillCourseName: (string) => {
        browser.wait(EC.elementToBeClickable(fieldCourseName), 30000);
        return fieldCourseName.sendKeys(string);
    },

    fillSectionName: (string) => {
        browser.wait(EC.elementToBeClickable(fieldSectionName), 30000);
        fieldSectionName.clear();
        return fieldSectionName.sendKeys(string);
    },

    selectSubject: () => {
        browser.wait(EC.elementToBeClickable(fieldSubjectArea), 30000);
        return fieldSubjectArea.$('[value="8"]').click();
    },

    selectLevel: () => {
        browser.wait(EC.elementToBeClickable(fieldLevel), 30000);
        return fieldLevel.$('[value="16"]').click();
    },

    saveCreatedCourse: () => {
        browser.wait(EC.elementToBeClickable(saveCourseButton), 30000);
        return saveCourseButton.click();
    },

    getCreatedCourseAccessToken: ()=> {
        browser.wait(EC.presenceOf(createdCourseTokenDiv), 30000);
        return createdCourseTokenDiv.getText();
    }
};