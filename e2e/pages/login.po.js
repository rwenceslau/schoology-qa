'use strict';

let EC = protractor.ExpectedConditions,
    // buttons
    btnLogin,
    //fields
    fieldEmail,
    fieldPassword;

module.exports = {
    init: () => {
        btnLogin = element(by.id('edit-submit'));
        fieldEmail = element(by.id('edit-mail'));
        fieldPassword = element(by.id('edit-pass'));
    },

    clickBtnLogin: () => {
        browser.wait(EC.elementToBeClickable(btnLogin), 30000);
        return btnLogin.click();
    },

    fillEmail: (string) => {
        browser.wait(EC.elementToBeClickable(fieldEmail), 30000);
        return fieldEmail.sendKeys(string);
    },

    fillPassword: (string) => {
        browser.wait(EC.elementToBeClickable(fieldPassword), 30000);
        return fieldPassword.sendKeys(string);
    },

    getLoginUrl: () => {
        return browser.getCurrentUrl();
    }
};