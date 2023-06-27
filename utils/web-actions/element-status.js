const { expect } = require('chai');
const { use } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {logger} = require('../../logger/log4js');
const { getElement } = require('../common-actions/find-element');



use(chaiAsPromised);

  const verifyElementIsDisabled = async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.isEnabled()
      .then((isElementDisabled) => {
        expect(isElementDisabled).to.be.equal(false);
        logger.info(`${locatorName} Element Disabled - Expected ${isElementDisabled} | Actual - ${false}`);
      }).catch((err) => {
        logger.trace(`${locatorName} Element is not disabled - ${err}`);
        throw new Error(`${locatorName} Element is not disabled - ${err}`);
      });
  }

  const verifyElementIsEnabled = async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.isEnabled()
      .then((isElementEnabled) => {
        expect(isElementEnabled).to.be.equal(true);
        logger.info(`${locatorName} Element Enabled - Expected ${isElementEnabled} | Actual - ${true}`);
      }).catch((err) => {
        logger.trace(`${locatorName} Element is not enabled - ${err}`);
        throw new Error(`${locatorName} Element is not enabled - ${err}`);
      });
  }

  const verifyElementIsDisplayed = async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.isDisplayed()
      .then((isElementDisplayed) => {
        isElementDisplayed = true;
        expect(isElementDisplayed).to.be.equal(true);
        logger.info(`${locatorName} Element Displayed - Expected ${isElementDisplayed} | Actual - ${true}`);
      }).catch((err) => {
        logger.trace(`${locatorName} Element is not displayed - ${err}`);
        throw new Error(`${locatorName} Element is not displayed - ${err}`);
      });
  }

  const verifyElementIsHidden = async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.isDisplayed()
      .then((isElementHidden) => {
        expect(isElementHidden).to.be.equal(false);
        logger.info(`${locatorName} Element Displayed - Expected ${isElementHidden} | Actual - ${false}`);
      }).catch((err) => {
        logger.trace(`Element is displayed - ${err}`);
        throw new Error(`Element is  displayed - ${err}`);
      });
  }

  const verifyElementIsNotPresent = async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.isPresent()
      .then((elementNotPresent) => {
        expect(elementNotPresent).to.be.equal(false);
        logger.info(`${locatorName} Element Displayed - Expected ${elementNotPresent} | Actual - ${false}`);
      }).catch((err) => {
        logger.trace(`${locatorName} Element is displayed and present - ${err}`);
        throw new Error(`${locatorName} Element is  displayed and present - ${err}`);
      });
  }

  const verifyElementIsPresent = async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.isPresent()
      .then((elementIsPresent) => {
        expect(elementIsPresent).to.be.equal(true);
        logger.info(`${locatorName}  Element Displayed - Expected ${elementIsPresent} | Actual - ${true}`);
      }).catch((err) => {
        logger.trace(`${locatorName} Element is not displayed and not present - ${err}`);
        throw new Error(`${locatorName} Element is  not displayed and not present - ${err}`);
      });
  }

  const verifyMultipleElements = async (table) => {
    const tableData = table.hashes();
    await tableData.forEach(async (row) => {
      await verifyElementIsDisplayed(row.LocatorName);
    });
  }

  module.exports = {
    verifyMultipleElements,
    verifyElementIsPresent,
    verifyElementIsNotPresent,
    verifyElementIsHidden,
    verifyElementIsDisplayed,
    verifyElementIsEnabled, 
    verifyElementIsDisabled
  }


