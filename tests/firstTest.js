module.exports = {
    'First experiment test case'(browser) {
        browser
            .url('http://automationpractice.com')
            .waitForElementVisible("#header")
            .assert.visible("#header");
    }
}
