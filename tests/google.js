module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const searchTerm = 'Elon Musk';

        const page = browser.page.googleAdvancedSearch();

        const inputSearch = `#searchform [value='${searchTerm}']`;

        page
            .navigate()
            .setSearchTearm(searchTerm)
            .selectFilter('@divLanguageDropdown', 'lang_en')
            .selectFilter('@divLastUpdateDropdown', 'm')
            .search();


        browser
            .assert.urlContains('as_q=Elon+Musk', 'Search term is Elon Musk')
            .assert.urlContains('lr=lang_en', 'Language is English')
            .assert.urlContains('as_qdr=m', 'Last modified - one month ago')
            .setCookie({ name: 'CONSENT', value: 'YES+IE.en+V9+BX' })
            .refresh();

        browser.expect.element(inputSearch).to.be.visible; // first approach - cannot set message
        browser.assert.visible(inputSearch, `Search term ${searchTerm} is visible`); // second approach

        // .pause(10000)
        browser.saveScreenshot('tests_output/google.png');
    }
}
