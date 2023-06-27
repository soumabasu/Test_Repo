const { Then } = require('@cucumber/cucumber');
const elementActions = require('../utils/web-actions/index');

Then(/^I click "([^"]*)"/, { timeout: 2 * 60000 }, async (
  locatorName,
) => {
  await elementActions.click(locatorName);
});

Then(/^I verify title of the "([^"]*)" webpage/, { timeout: 2 * 60000 }, async (pageNameTitle) => {
  await elementActions.validateTitle(pageNameTitle);
});

Then(/^I verify text of "([^"]*)" as "([^"]*)"/, async (
  locatorName,
  translationTextPath,
) => {
  await elementActions.verifyText(locatorName, translationTextPath);  
});

Then(
  /^I verify color of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, color) => {
    await elementActions.verifyCssColorProperty(locatorName, color);
  },
);

Then(
  /^I verify background-color of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, color) => {
    await elementActions.verifyCssBackgroundColorProperty(locatorName, color);
  },
);

Then(
  /^I verify attribute "([^"]*)" of "([^"]*)" to be "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (attributeName, locatorName, constraintName) => {
    await elementActions.verifyAttributeOfElement(attributeName, locatorName, constraintName);
  },
);

Then(
  /^I should see "([^"]*)" is disabled$/,
  { timeout: 2 * 60000 },
  async (locatorName) => {
    await elementActions.verifyElementIsDisabled(locatorName);
  },
);

Then(
  /^I should see "([^"]*)" is enabled$/,
  { timeout: 2 * 60000 },
  async (locatorName) => {
    await elementActions.verifyElementIsEnabled(locatorName);
  },
);

Then(/^I should see "([^"]*)"/, { timeout: 2 * 60000 }, async (
  locatorName,
) => {
  await elementActions.verifyElementIsDisplayed(locatorName);
});

Then(/^I should not see "([^"]*)"$/, { timeout: 2 * 60000 }, async (
  locatorName,
) => {
  await elementActions.verifyElementIsNotPresent(locatorName);
});

Then(
  /^I verify text of multiple labels$/,
  { timeout: 2 * 60000 },
  async (table) => {
    await elementActions.verifyMultipleLabelsAndTexts(table);
  },
);

Then(/^I verify color of multiple labels$/, async (table) => {
  await elementActions.verifyMultipleColors(table);
});

Then(/^I should see "([^"]*)" as "([^"]*)"/, async (
  locatorName,
  translationTextPath,
) => {
  await elementActions.verifyLabel(locatorName, translationTextPath);
});

Then(
  /^I should see multiple elements$/,
  { timeout: 2 * 60000 },
  async (table) => {
    await elementActions.verifyMultipleElements(table);
  },
);

Then(
  /^I verify font-weight of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, fontWeight) => {
    await elementActions.verifyCssFontWeight(locatorName, fontWeight);
  },
);

Then(
  /^I verify font-weight of multiple labels$/,
  { timeout: 2 * 60000 },
  async (table) => {
    await elementActions.verifyMultipleFontWeights(table);
  },
);

Then(
  /^I verify stroke of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, stroke) => {
    await elementActions.verifyCssStrokeProperty(locatorName, stroke);
  },
);

Then(
  /^I verify fill of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, fill) => {
    await elementActions.verifyCssFillProperty(locatorName, fill);
  },
);

Then(
  /^I verify font-family of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, fontFamilyName) => {
    await elementActions.verifyCssFontFamilyProperty(locatorName, fontFamilyName);
  },
);

Then(
  /^I verify font-size of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, fontWeight) => {
    await elementActions.verifyCssFontSize(locatorName, fontWeight);
  },
);
Then(
  /^I verify font-line-height of "([^"]*)" as "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName, fontWeight) => {
    await elementActions.verifyCssLineHeight(locatorName, fontWeight);
  },
);

Then(/^I verify font-size of "([^"]*)" as "([^"]*)"/, { timeout: 2 * 60000 }, async (locatorName, fontWeight) => {
  await elementActions.verifyCssFontSize(locatorName, fontWeight);
});

Then(/^I verify font-line-height of "([^"]*)" as "([^"]*)"/, { timeout: 2 * 60000 }, async (locatorName, fontWeight) => {
  await elementActions.verifyCssLineHeight(locatorName, fontWeight);
});

Then(/^I scroll to see the element "([^"]*)"/,
  { timeout: 2 * 60000 },
  async (locatorName) => {
    await elementActions.scrollToElement(locatorName);
  });

Then(
  /^I hover on element "([^"]*)"$/,
  { timeout: 2 * 60000 },
  async (locatorName) => {
    await elementActions.hoverOnAElement(locatorName);
  },
);

Then(
  /^I verify "([^"]*)" options of the "([^"]*)" dropdown/,
  { timeout: 2 * 60000 },
  async (dropdownName, locatorName) => {
    await elementActions.verifyOptionsInADropdown(dropdownName, locatorName);
  },
);

Then(/^I select "([^"]*)" from the visible text of "([^"]*)" dropdown$/, { timeout: 2 * 60000 }, async (value, locatorName) => {
  await elementActions.selectByVisibleText(locatorName, value);
});


Then(/^I select "\w+" from the index of "\d+" dropdown$/, { timeout: 2 * 60000 }, async (value, locatorName) => {
  await elementActions.selectByIndex(locatorName, value);
});

Then(/^I select "\w+" with attribute "\w+" from the options of "\w+" dropdown$/, { timeout: 2 * 60000 }, async (attribute, value, locatorName) => {
  await elementActions.selectByAttribute(locatorName, attribute, value);
});

Then(/^I drag and drop element "\w+" to "\w+"/, { timeout: 2 * 60000 }, async (locatorName, targetElementLocator) => {
  await elementActions.dragAndDropElement(locatorName, targetElementLocator);
});

Then(/^I drag and drop element "\w+" to relative position x-"\d+" y-"\d+"/, { timeout: 2 * 60000 }, async (locatorName, x, y) => {
  await elementActions.dragAndDropElement(locatorName, x, y);
});

Then(/^I move the cursor over "([^"]*)"/, { timeout: 2 * 60000 }, async (locatorName) => {
  await elementActions.hoverOveronElement(locatorName)
});

Then(/^I fetch and print "([^"]*)"/,{ timeout: 2 * 60000 }, async (locatorName) => {
  await elementActions.fetchData(locatorName)
});

Then(/^I verify value of "([^"]*)" as "([^"]*)"/, { timeout: 2 * 60000 }, async (locatorName, value) => {
  await elementActions.verifyValue(locatorName, value)
});

Then(/^I close the advertisement by clicking "([^"]*)"/, { timeout: 2 * 60000 }, async (locatorName) => {
  await elementActions.MMTcloseAdvertise(locatorName)
});

Then(/^I select future date in calender/, { timeout: 2 * 60000 }, async () => {
  await elementActions.selectfutureDate()
});

Then(/^I wait for "([^"]*)" to display/, { timeout: 2 * 60000 }, async (locatorName) => {
  await elementActions.waitforDisplay(locatorName)
});

Then(/^I fetch and print airlines name and duration and price/, { timeout: 2 * 60000 }, async () => {
  await elementActions.MMTdatafetch()
});

Then(/^I verify "([^"]*)" filter and click/, { timeout: 2 * 60000 }, async (locatorName) => {
  await elementActions.MMTverifyFilter(locatorName)
});

Then(/^I verify filter implemented correctly/, { timeout: 2 * 60000 }, async () => {
  await elementActions.MMTverifyAppliedFilter()
});

