const {logger} = require('../../logger/log4js');
const { getElement } = require('../common-actions/find-element');

module.exports = {


  dragAndDropElement: async (locatorName, targetElementLocator) => {
    try {
      const sourceElement = await getElement(locatorName);
      const targetElement = await getElement(targetElementLocator);
      await sourceElement.dragAndDrop(targetElement);
      logger.info(`Dragged ${locatorName} and dropped at - ${targetElementLocator}`);
    } catch (err) {
      logger.trace(`Failed in Drag and Drop ${locatorName} - ${err}`);
      throw new Error(`Failed in Drag and Drop ${locatorName} - ${err}`);
    }
  },

  dragAndDropByCoOrdinates: async (locatorName, x, y) => {
    try {
      const sourceElement = await getElement(locatorName);
      await sourceElement.dragAndDrop({x:x , y:y}, {duration: 1000});
      logger.info(`Dragged ${locatorName} and dropped at - ${targetElementLocator}`);
    } catch (err) {
      logger.trace(`Failed in Drag and Drop ${locatorName} - ${err}`);
      throw new Error(`Failed in Drag and Drop ${locatorName} - ${err}`);
    }
  },

  hoverOveronElement: async(locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.moveTo()
      logger.info(`Moved the mouse cursor to ${locatorName}`);
      
    } catch (error) {
      logger.trace(`Failed to moved the mouse cursor to ${locatorName} - ${err}`);
      throw new Error(`Failed in moving mouse cursor to ${locatorName} - ${err}`);   
    }
  },

}