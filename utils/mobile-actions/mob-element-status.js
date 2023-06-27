const { expect } = require('chai');
const { use } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {logger} = require('@deloitte/web/logger/log4js');
const { getElement } = require('@deloitte/web/utils/common-actions/find-element');

use(chaiAsPromised);
module.exports = {
verifyElementIsDisplayed: async (locatorName) => {
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
}