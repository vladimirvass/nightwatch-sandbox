const baseConfig = require('./nightwatch.conf.js');

const config = {
    ...baseConfig,
    webdriver: {
        'start_process': false,
        'host': 'hub-cloud.browserstack.com',
        'port': 443
    },
};

// Selenium 4 specific, enable them when S4 is released officially
// config.test_settings.default.desiredCapabilities['bstack:options'].userName = process.env.BROWSERSTACK_USER;
// config.test_settings.default.desiredCapabilities['bstack:options'].accessKey = process.env.BROWSERSTACK_KEY;

config.test_settings.default.desiredCapabilities['browserstack.user'] = process.env.BROWSERSTACK_USER;
config.test_settings.default.desiredCapabilities['browserstack.key'] = process.env.BROWSERSTACK_KEY;
config.test_settings.default.desiredCapabilities.chromeOptions.args = [];

config.test_settings.firefox = {
    desiredCapabilities: {
        os: 'Windows',
        os_version: '10',
        browserName: 'Firefox',
        browser_version: 'latest',
        ['browserstack.local']: false
    }
};

config.test_settings.safari = {
    desiredCapabilities: {
        os: 'OS X',
        os_version: 'Catalina',
        browserName: 'Safari',
        browser_version: '13.0',
        ['browserstack.local']: false
    }
};

// Code to copy seleniumhost/port into test settings
for (var i in config.test_settings) {
    var test_setting = config.test_settings[i];
    test_setting['selenium_host'] = config.webdriver.host;
    test_setting['selenium_port'] = config.webdriver.port;
}

module.exports = config;
