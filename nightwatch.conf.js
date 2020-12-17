require('dotenv').config();

module.exports = {
  'src_folders': ['tests'],
  'page_objects_path': ['pages'],

  'webdriver': {
    'start_process': true,
    'server_path': require('chromedriver').path,
    'port': 9515
  },

  'test_settings': {
    'default': {
      'screenshots': {
        'enabled': true,
        'on_failure': true,
        'on_error': true,
        'path': 'tests_output/screenshots'
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'browserstack.user': '${BROWSERSTACK_USER}',
        'browserstack.key': '${BROWSERSTACK_KEY}',

        // comment upper two rows when Selenium 4 is released officially
        // and then enable these options

        // 'bstack:options': {
        //   local: 'false',
        //   userName: '${BROWSERSTACK_USER}',
        //   accessKey: '${BROWSERSTACK_KEY}',
        // },

        'chromeOptions': {
          // 'args': ['--headless']
        }
      }
    }
  }
};
