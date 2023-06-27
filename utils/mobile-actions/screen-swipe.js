const {logger} = require('../../logger/log4js');

module.exports = {

  swipeScreen: async () => {
    try {
      const startX = 511;
      const startY = 926;
      const endX = 540;
      const endY = 1345;
      await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 1000 } }, // Adjust the wait time if needed
        { action: 'moveTo', options: { x: endX, y: endY } },
        { action: 'release' }
      ]);
      logger.info(`screen swiped from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY}`);
    } catch (error) {
      logger.trace(`Unable to swipe screen from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
      throw new Error(`No such coordinates found from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
    }
  },

  swipeTosetHeightfeet: async () => {
    try {
      const startX = 285;
      const startY = 1342;
      const endX = 310;
      const endY = 1132;
      await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 1000 } }, // Adjust the wait time if needed
        { action: 'moveTo', options: { x: endX, y: endY } },
        { action: 'release' }
      ]);
      logger.info(`screen swiped from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY}`);
    } catch (error) {
      logger.trace(`Unable to swipe screen from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
      throw new Error(`No such coordinates found from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
    }

  },

  swipeTosetHeightinches: async () => {
    try {
      const startX = 660;
      const startY = 915;
      const endX = 650;
      const endY = 1371;
      await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 1000 } }, // Adjust the wait time if needed
        { action: 'moveTo', options: { x: endX, y: endY } },
        { action: 'release' }
      ]);
      logger.info(`screen swiped from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY}`);
    } catch (error) {
      logger.trace(`Unable to swipe screen from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
      throw new Error(`No such coordinates found from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
    }
  },

  swipeTonextMonth: async () => {
    try {
      const startX = 190;
      const startY = 516;
      const endX = 196;
      const endY = 196;
      await driver.touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 1000 } }, // Adjust the wait time if needed
        { action: 'moveTo', options: { x: endX, y: endY } },
        { action: 'release' }
      ]);
      logger.info(`screen swiped from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY}`);
    } catch (error) {
      logger.trace(`Unable to swipe screen from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
      throw new Error(`No such coordinates found from X: ${startX}, Y: ${startY} to X: ${endX}, Y:${endY} coordinates not found`);
    }
  }
  
}