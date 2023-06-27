const { getElement } = require('../common-actions/find-element');
const { logger } = require('@deloitte/web/logger/log4js');
const { expect, assert } = require("chai");

module.exports = {
  fetchData: async (locatorName) => {
    try {
      const ele = await getElement(locatorName)
      await ele.getText()
      logger.info(`Successfully get the data from the element ${locatorName}`)
    } catch (error) {
      logger.trace(`Not able to fetch data from element ${locatorName} failed - ${err}`);
       throw new Error(` Error getting data from element ${locatorName} failed - ${err}`);
    }
  },

  MMTcloseAdvertise: async(locatorName) => {
    try{
    const iframeIndex = 0;
    await browser.switchToFrame(iframeIndex)
    const closeBtn = await getElement(locatorName);
    await closeBtn.waitForDisplayed()
    await closeBtn.click();
    await browser.switchToParentFrame();
    await browser.pause(3000)
    let parentWindowHandle;
    let nextWindowHandle;
    const allWindowHandles = await browser.getWindowHandles();
    parentWindowHandle = allWindowHandles[0];
    nextWindowHandle = allWindowHandles[1];
    await browser.switchToWindow(nextWindowHandle);
    await browser.closeWindow()
    await browser.switchToWindow(parentWindowHandle);
    logger.info(`Successfully clicked on ${locatorName} and closed the advertisement`)
    }catch(err){
      logger.trace(`Not able to click on close element ${locatorName} failed - ${err}`);
      throw new Error(` Error in clicking close element ${locatorName} failed - ${err}`);
    }
  },

  waitforDisplay: async(locatorName) => {
    try {
      const ele = await getElement(locatorName)
      await ele.waitForDisplayed()
      logger.info(`Element ${locatorName} is displayed`);
      
    } catch (err) {
      logger.trace(`Element ${locatorName} is not displayed failed - ${err}`);
      throw new Error(` Element ${locatorName} is not displayed failed - ${err}`)  
    }
  },

  MMTdatafetch: async() => {
      try{
      const ele = await $$('.fliCode');
       for (let i = 0; i < ele.length; i++) {
        const flightName = await ele[i].getText();
        logger.info(`Flight names are ${flightName}`);
       }
      const price = await $$("//div[@class='blackText fontSize18 blackFont white-space-no-wrap'][contains(text(),'₹')]")
       for(let j = 0; j < price.length; j++){
          const flightPrice = await price[j].getText()
        logger.info(`Flight prices are ${flightPrice}`);
        }
      const duration = await $$("(//div[@class='stop-info flexOne'])")
       for(let k = 0; k < duration.length; k++){
          const flightDuration = await duration[k].getText()
          const filteredDurationtrim = flightDuration.replace(/(\d+ [a-z]+\s)?via [A-Za-z\s]+/i, '').trim();
          logger.info(`Flight duration: ${filteredDurationtrim}`);
        }
      
    }catch(err){
      logger.trace(`Element ${flightName} is not displayed failed - ${err}`);
      throw new Error(` Element ${flightName} is not displayed failed - ${err}`)

    }
},

MMTverifyFilter: async(locatorName) => {
  try{
  const ele = await getElement(locatorName)
  if (await ele.isDisplayed()){
    await ele.click()
    logger.info(`Airline selected successfully in filter | element - ${locatorName}`);
   }
  else{
    logger.info(`Airline not present in filter | element - ${locatorName}`);
     }
   }catch(err){
  logger.trace(`Element ${flightName} is not displayed failed - ${err}`);
  throw new Error(` Element ${flightName} is not displayed failed - ${err}`)
  }
},

MMTverifyAppliedFilter: async () => {
  try {
    const filterElements = await $$( "(//div)[100]");
    const flightElements = await $$('.boldFont.blackText.airlineName');
    await browser.pause(2000);

    for (let i = 0; i < filterElements.length; i++) {
      const filterText = await filterElements[i].getText();
      const filterName = filterText.replace(/ \(\d+\)/, ''); 

      for (let j = 0; j < flightElements.length; j++) {
        const flightName = await flightElements[j].getText();
        assert.strictEqual(filterName, flightName, `Value Mismatched | Actual value -${filterName} but got Expected value - ${flightName}`);
        logger.info(`Value matched| element - Actual value -${filterName} and expected value - ${flightName}`)
       }
     }
   }catch (err) {
    logger.trace(`Error: Filter Value mismatched - ${err}`);
    throw new Error(`Error: Unable to verify filter value - ${err}`);
    }
  }
}
