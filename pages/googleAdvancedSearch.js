module.exports = {
    url: 'https://www.google.com/advanced_search',

    elements: {
        inputSearchTerm: '[name="as_q"]',
        divLanguageDropdown: '#lr_button',
        divLastUpdateDropdown: '#as_qdr_button',
        btnSubmitAdvancedSearch: '.jfk-button-action'
    },

    commands: [{
        setSearchTearm(value) {
            return this
                .setValue('@inputSearchTerm', value)
        },
        selectFilter(selector, value) {
            return this
                .click(selector)
                .click(`[value="${value}"]`);
        },
        search() {
            return this
                .click('@btnSubmitAdvancedSearch');
        }
    }]
};
