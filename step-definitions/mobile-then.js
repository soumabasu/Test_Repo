const { Then } = require('@cucumber/cucumber');
const  elementActions = require('../utils/mobile-actions/mob-index')

Then(/^I verify "([^"]*)" is displyed/, { timeout: 2 * 60000 }, async function (locatorName) {
  await elementActions.verifyElementIsDisplayed(locatorName)
});

Then(/^I swipe screen to set "([^"]*)"/, { timeout: 2 * 60000 }, async function (Text) {
  await elementActions.swipeScreen(Text)
});

Then(/^I verify the "([^"]*)" value is set to "([^"]*)"/, { timeout: 2 * 60000 }, async function (locatorName) {
  await elementActions.verifyText(locatorName)
});

Then(/^I swipe set height screen to set feet/, { timeout: 2 * 60000 }, async function () {
  await elementActions.swipeTosetHeightfeet()
});

Then(/^I swipe set height screen to set inches/, { timeout: 2 * 60000 }, async function () {
  await elementActions.swipeTosetHeightinches()
});

Then(/^I enter text "([^"]*)" in the mobile element "([^"]*)"/, { timeout: 2 * 60000 }, async function (text, locatorName) {
  await elementActions.enterText(text, locatorName)
});

Then(/^I swipe screen to select next month in calendar/, { timeout: 2 * 60000 }, async function () {
  await elementActions.swipeTonextMonth()
});

Then(/^I click on element by co-ordinates/, { timeout: 2 * 60000 }, async function () {
  await elementActions.clickBycoordinates()
});

Then(/^I click on done/, { timeout: 2 * 60000 }, async function () {
  await elementActions.clickonDone()
});