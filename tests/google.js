module.exports = {
    '@tags': ['google'],
    'Google advanced search: Elon Musk'(browser) {
        const searchTerm = 'Elon Musk';
        const inputSearchTerm = '[name="as_q"]';
        const divLanguageDropdown = '#lr_button';
        const liLanguageDropdownValue = '[value="lang_en"]';
        const divLastUpdateDropdown = '#as_qdr_button';
        const liLastUpdateDropdownValue = '[value="m"]';
        const btnSubmitAdvancedSearch = '[value="Advanced Search"]';

        const inputSearch = `#searchform [value='${searchTerm}']`;

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(inputSearchTerm, 'Elon Musk') // analogue of sendKeys()
            .click(divLanguageDropdown)
            .click(liLanguageDropdownValue)
            .click(divLastUpdateDropdown)
            .click(liLastUpdateDropdownValue)
            .click(btnSubmitAdvancedSearch)
            .assert.urlContains('as_q=Elon+Musk', 'Search term is Elon Musk')
            .assert.urlContains('lr=lang_en', 'Language is English')
            .assert.urlContains('as_qdr=m', 'Last modified - one month ago')
            .setCookie({name: 'CONSENT', value: 'YES+IE.en+V9+BX'})
            .refresh();

            browser.expect.element(inputSearch).to.be.visible; // first approach - cannot set messgae
            browser.assert.visible(inputSearch, `Search term ${searchTerm} is visible`); // second approach
            
            // .pause(10000)
            browser.saveScreenshot('tests_output/google.png');
    }
}
