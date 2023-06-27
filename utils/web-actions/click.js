const {logger} = require('../../logger/log4js');
const { getElement } = require('../common-actions/find-element');

module.exports = {
  click: async (locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.click();
      logger.info(`Clicked on ${locatorName}`);
    } catch (err) {
      logger.trace(`Clicking on the ${locatorName} element failed - ${err}`);
      throw new Error(`Clicking on the ${locatorName} failed - ${err}`);
    }
  },

  doubleClick: async (locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.doubleClick();
      logger.info(`Double Clicked on ${locatorName}`);
    } catch (err) {
      logger.trace(`Double Clicking on the ${locatorName} element failed - ${err}`);
      throw new Error(`Double Clicking on the ${locatorName} failed`);
    }
  },
};
