const { expect, assert } = require("chai");
const { use } = require("chai");
const chaiAsPromised = require("chai-as-promised");
const { logger } = require("../../logger/log4js");

const {
  TRANSLATIONS,
  ELEMENT_ATTIRIBUTES_CONSTANTS,
} = require(`${process.cwd()}/test-data/assets/flatTranslations.js`);
const { getElement } = require("../common-actions/find-element");

use(chaiAsPromised);

module.exports = {
  validateTitle: async (pageNameTitle) => {
    // eslint-disable-next-line dot-notation
    const expectedTitle = ELEMENT_ATTIRIBUTES_CONSTANTS[pageNameTitle];
    await browser
      .getTitle()
      .then((actualTitleInBrowser) => {
        expect(actualTitleInBrowser).to.be.equal(expectedTitle);
        logger.info(
          `Verifying Title Expected - ${expectedTitle} | Actual - ${actualTitleInBrowser}`
        );
      })
      .catch((err) => {
        logger.error(`Verifying Title Expected - ${err}`);
        throw new Error("Page Title Verification Failure");
      });
  },

  verifyText: async (locatorName, translationTextPath) => {
    try {
      const arr = translationTextPath.split("+");
      const expected = arr.reduce((accumulator, translationPath, index) => {
        let expectedString;
        if (index !== arr.length - 1) {
          expectedString = `${accumulator} ${TRANSLATIONS[translationPath]}`;
        } else {
          expectedString = `${accumulator.trim()}${
            TRANSLATIONS[translationPath]
          }`;
        }
        return expectedString.trim();
      }, " ");
      const ele = await getElement(locatorName);
      const actual = await ele.getText();
      const actualText = actual.replace(/<.*?>/g, "");
      const expectedText = expected.replace(/<.*?>/g, "");
      expect(actualText.trim()).to.be.equal(expected);
      logger.info(
        `Text mismatch | Actual - ${actualText} | Expected - ${expectedText}`
      );
    } catch (err) {
      logger.info(`Text mismatch for locator ${locatorName}`);
      throw new Error(`Text mismatch for locator ${locatorName}`);
    }
  },

  verifyLabel: async (locatorName, translationTextPath) => {
    const expected = ELEMENT_ATTIRIBUTES_CONSTANTS[translationTextPath];
    const ele = await getElement(locatorName);
    await ele
      .getText()
      .then((actual) => {
        expect(actual).to.be.equal(expected);
        logger.info(`Label Verification ${actual} | Actual - ${expected}`);
      })
      .catch((err) => {
        logger.trace(`Label Verification Mismatch ${err}`);
        throw new Error(`Label Verification Mismatch ${err}`);
      });
  },

  verifyAttributeOfElement: async (
    attributeName,
    locatorName,
    constraintName
  ) => {
    const expectedAttributeValue =
      ELEMENT_ATTIRIBUTES_CONSTANTS[constraintName];
    const ele = await getElement(locatorName);
    await ele
      .getAttribute(attributeName)
      .then((actualAttributeValue) => {
        expect(actualAttributeValue).to.be.equal(expectedAttributeValue);
        logger.info(
          `CSS attribute Value Verification - Expected ${expectedAttributeValue} | Actual - ${actualAttributeValue}`
        );
      })
      .catch((err) => {
        logger.trace(`CSS attribute Value Verification failure - ${err}`);
        throw new Error(`CSS attribute Value Verification failure - ${err}`);
      });
  },

  verifyMultipleLabelsAndTexts: async (table) => {
    const tableData = table.hashes();
    await tableData.forEach(async (row) => {
      await this.verifyText(row.LocatorName, row.TranslationsLabelPath);
    });
  },

  verifyOptionsInADropdown: async (dropdownName, locatorName) => {
    // fetching expected values from the dropdown name passed in this gherkin
    // const expectedValues = inputData['options'][`${dropdownName}`]
    // const expectedValues = fetchTestData(dropdownName);
    const expectedValues = inputData['options'][`${dropdownName}`]
    // fetching list of option available in the select dropwdown
    let actualOptions = [];
    const ele = await getElements(locatorName);
    for (let i = 0; i < ele.length; i += 1) {
      const val = await ele[i].getText();
      actualOptions.push(val);
    }
    expect(JSON.stringify(actualOptions)).to.be.equal(
      JSON.stringify(expectedValues)
    );
    logger.info(
      `The dropdown options of ${dropdownName} matches with the expected options provided`
    );
  },

  verifyValue: async (locatorName, value) => {
    try {
      const ele = await getElement(locatorName)
      const actualValue = await ele.getText()
      const expectedValue = value
      assert.strictEqual(actualValue, expectedValue, `Expected "${actualValue}", but got "${expectedValue}"`);
      logger.info(`Value is verified succsessfully`);
    } catch (err) {
      logger.info(`Value mismatch for locator ${locatorName}`);
      throw new Error(`Value mismatch for locator ${locatorName}`)     
    }
  }
};
