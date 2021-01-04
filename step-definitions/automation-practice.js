const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I open Automation practice's search page$/, () => {
  return client.url('http://automationpractice.com').waitForElementVisible('body', 1000);
});

Then(/^the title is "([^"]*)"$/, title => {
  return client.assert.title(title);
});

Then(/^the Automation practice search form exists$/, () => {
  return client.assert.visible('#search_query_top');
});