const {logger} = require('../../logger/log4js');

module.exports = {

  clickBycoordinates: async () => {
    try {
      const x = 294; // X-coordinate
      const y = 522; // Y-coordinate
    
      await driver.touchPerform([
        { action: 'press', options: { x: x, y: y } },
        { action: 'release' }
      ]);
    
      logger.info(`Tapped on element at X: ${x}, Y: ${y}`);
    } catch (error) {
      logger.trace(`Unable to tap on element at X: ${x}, Y: ${y} coordinates not found`);
      throw new Error(`No such coordinates found at X: ${x}, Y: ${y}`);
    }
  },

  clickonDone: async () => {
    try {
      const x = 200; // X-coordinate
      const y = 632; // Y-coordinate
    
      await driver.touchPerform([
        { action: 'press', options: { x: x, y: y } },
        { action: 'release' }
      ]);
    
      logger.info(`Tapped on element at X: ${x}, Y: ${y}`);
    } catch (error) {
      logger.trace(`Unable to tap on element at X: ${x}, Y: ${y} coordinates not found`);
      throw new Error(`No such coordinates found at X: ${x}, Y: ${y}`);
    }
  }
    
}