const {logger} = require('../../logger/log4js');
const { getElement } = require('../common-actions/find-element');

module.exports = {

  selectByVisibleText: async (locatorName, value) =>{
    try{
    const ele = await getElement(locatorName);
    await browser.pause(3000)
    await ele.selectByVisibleText(value);
     logger.info(`Selected ${value} from the ${locatorName} dropdown`)
     }
     catch(err){
       logger.trace(`${value} selection from ${locatorName} dropdown failed - ${err}`);
       throw new Error(`${value} selection from ${locatorName} dropdown failed - ${err}`);
    }
  },

  selectByIndex: async (locatorName, index) =>{
    try{
    const ele = await getElement(locatorName);
    await ele.selectByIndex(index);
    logger.info(`Selected ${selectedText} from the ${locatorName} dropdown`)
    }
    catch(err){
      logger.trace(`${index} selection from ${locatorName} dropdown failed - ${err}`);
      throw new Error(`${index} selection from ${locatorName} dropdown failed - ${err}`);
    }
  },

  selectByAttribute: async (locatorName, attribute, value) =>{
    try{
    const ele = await getElement(locatorName);
    await ele.selectByAttribute(attribute, value);
    logger.info(`Selected ${selectedText} from the ${locatorName} dropdown`)
    }
    catch(err){
      logger.trace(`${index} selection from ${locatorName} dropdown failed - ${err}`);
      throw new Error(`${index} selection from ${locatorName} dropdown failed - ${err}`);
    }
  },

  selectfutureDate: async() => {
    try{
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 30);
    const futureDay = futureDate.getDate();
    const dateLocator = `//div[@class='DayPicker-Day' and descendant::p[text()='${futureDay}']]`;
    await $('.DayPicker').waitForDisplayed();
    await $(dateLocator).click();
    logger.info(`Selected the date as ${futureDay} in calender`)
  }catch(err){
    logger.trace(`Error selecting ${futureDay} as date in calender - ${err}`);
    throw new Error(`Error selecting ${futureDay} as date in calender - ${err}`);
  }
}

}