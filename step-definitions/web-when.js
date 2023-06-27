const { When } = require('@cucumber/cucumber');
const elementActions = require('../utils/web-actions/index');

When(/^I refresh the page/, { timeout: 2 * 60000 }, async () => {
  await elementActions.refreshPage();
});

When(/^I enter "([^"]*)" in the element "([^"]*)" of the user "([^"]*)"$/, { timeout: 2 * 60000 }, async (testDataKey, locatorName, user) => {
  await elementActions.enterText(testDataKey, locatorName, user);
});

When(/^I enter "([^"]*)" in the web element "([^"]*)"$/, { timeout: 2 * 60000 }, async (testDataKey, locatorName) => {
  await elementActions.setValue(locatorName, testDataKey);
});

When(/^I press tab/, { timeout: 2 * 60000 }, async () => {
  await elementActions.tab();
});

When(/^I wait for "([^"]*)" seconds$/, { timeout: 2 * 60000 }, async (waitTimeInSeconds) => {
  await elementActions.pause(waitTimeInSeconds);
});

When(/^I navigate back in the browser history/, { timeout: 2 * 60000 }, async () => {
  await elementActions.navigateBack();
});

When(/^I switch tab via page title "([^"]*)"/, { timeout: 2 * 60000 }, async (title) => {
  await elementActions.switchTab(title);
});

When(/^I enter text "([^"]*)" in the web element "([^"]*)"/,{ timeout: 2 * 60000 }, async (textValue, locatorName) => {
  await elementActions.typeText(locatorName, textValue);
});