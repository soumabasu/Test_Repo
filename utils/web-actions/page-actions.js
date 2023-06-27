const { use } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { logger } = require('../../logger/log4js');

require('dotenv').config();
use(chaiAsPromised);

module.exports = {
  refreshPage: async () => {
    await browser.refresh()
      .then(() => {
        logger.info('Page refresh successful');
      }).catch((err) => {
        logger.trace(`Page refresh unsuccessful - ${err}`);
        throw new Error(`Page refresh unsuccessful - ${err}`);
      });
  },

  navigate: async (url) => {
    await browser.url(url).then(() => {
      logger.info(`URL - ${url} - launched successfully`);
    }).catch((error) => {
      logger.trace(`Unable to navigate to the URL - ${url} || ${error}`);
      throw new Error(`Unable to navigate to the URL - ${error}`);
    });
  },

  pause: async (milliseconds) => {
    await browser.pause(milliseconds * 1000).then(() => {
      logger.info(`Waited for - ${milliseconds}`);
    }).catch((error) => {
      logger.trace(`Failed to wait for - ${milliseconds} - ${error}`);
      throw new Error(`Failed to wait for - ${milliseconds} - ${error}`);
    });
  },

  navigateBack: async () => {
    await browser.back().then(async () => {
      logger.info('Navigated back in the browser history');
    }).catch((error) => {
      logger.trace('Failed to navigate back');
      throw new Error('Failed to navigate back');
    });
  },

  switchTab: async (title) => {
    await browser.switchWindow(title).then(() => {
      logger.info(`Switched to new tab via title match - ${title}`);
    }).catch((error) => {
      logger.trace(`Unable to switch to the tab - ${title} || ${error}`);
      throw new Error(`Unable to switch to the tab - ${error}`);
    });
  },


  
  }
  
