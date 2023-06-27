const { Given } = require('@cucumber/cucumber');
const elementActions = require('../utils/web-actions/index');

Given(/^I launch the url "([^"]*)"/, { timeout: 2 * 60000 }, async (url) => {
  await elementActions.navigate(url);
});




