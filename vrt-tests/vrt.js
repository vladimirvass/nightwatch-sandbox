module.exports = {
    'First experiment test case'(browser) {
        const headerSection = '#header';
        browser
            .url('http://automationpractice.com')
            .waitForElementVisible(headerSection)
            .assert.screenshotIdenticalToBaseline(headerSection, 'autopractice-header');
    }
}
