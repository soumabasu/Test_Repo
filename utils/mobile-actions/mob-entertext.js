const {logger} = require('../../logger/log4js');
const { getElement } = require('../common-actions/find-element');

module.exports = {
  enterText: async (text, locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.setValue(text);
      logger.info(`Entered text in the element ${locatorName}`);
    } catch (err) {
      logger.trace(`Unable to enter text on the ${locatorName} element failed - ${err}`);
      throw new Error(`Unable to enter text on the ${locatorName} failed - ${err}`);
    }
  },
}