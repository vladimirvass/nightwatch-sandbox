module.exports = {
    'First experiment test case'(browser) {
        browser
            .url('https://www.yahoo.com/')
            .waitForElementVisible('.con-wizard')
            .click('button.primary')
            .waitForElementVisible("[name='p']")
            .assert.visible("[name='p']");
    }
}
