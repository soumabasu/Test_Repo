const { getElement } = require('../common-actions/find-element');
const {logger} = require('../../logger/log4js');

module.exports = {
  scrollToElement: async (locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.scrollIntoView();
      logger.info(`Scrolling the page to view the ${locatorName}`);
    } catch (err) {
      logger.trace(`Failed in scrolling the page to view the ${locatorName} - ${err}`);
      throw new Error(`Failed in scrolling the page to view the ${locatorName}`);
    }
  },

  hoverOnAElement: async (locatorName) => {
    const ele = await getElement(locatorName);
    await ele.moveTo()
      .then(() => {
        logger.info(`Hovered on element ${locatorName} succcessfully`);
      })
      .catch((err) => {
        logger.trace(`Failure in hovering on element ${locatorName} - ${err}`);
        throw new Error(`Failure in hovering on element ${locatorName} - ${err}`);
      });
  },
};
