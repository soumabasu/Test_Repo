const path = require('path');
const { getElement } = require("../common-actions/find-element");
const { logger } = require("../../logger/log4js");
const getTestData = require('../common-actions/get-test-data');


module.exports = {
 
  setValue: async (locatorName, inputText) => {
    try {
      const ele = await getElement(locatorName);
      await ele.clearValue();
      const inputValue = await getTestData.getGeneralTestData(inputText)
      await ele.setValue(inputValue);
      logger.info(`Entered text ${inputValue} in the element ${locatorName}`);
    } catch (err) {
      console.log(err);
      logger.trace(`Failed to enter text in the locator ${locatorName} - ${err}`);
      throw new Error(`Failed to enter text in the locator ${locatorName} - ${err}`);
    }
   },

  enterText: async (testDataKey, locatorName, user) => {
    try {
      const ele = await getElement(locatorName);
      const inputText = await getTestData.getUserTestData(testDataKey, user)
      await ele.setValue(inputText);
      logger.info(
        `Entered text in locator ${locatorName} - Value - ${inputText} - User - ${user}`
      );
    } catch (err) {
      logger.trace(
        `Failed entering text in locator ${locatorName} - Value - ${testDataKey} - User - ${user} - ${err}`
      );
      throw new Error(
        `Failed entering text in locator ${locatorName} - Value - ${testDataKey} - User - ${user} - ${err}`
      );
    }
  },

  tab: async (locatorName) => {
    try {
      const ele = await getElement(locatorName);
      await ele.addValue("input", ["Tab"]);
      logger.info(`Entered Tab in locator ${locatorName} `);
    } catch (err) {
      logger.trace(`Failed entering tab in locator ${locatorName} - - ${err}`);
      throw new Error(`Failed entering tab in locator ${locatorName}`);
    }
  },

  typeText: async (locatorName, textValue) => {
    try {
      const ele = await getElement(locatorName)
      await ele.clearValue();
      await ele.setValue(textValue)
      logger.info(`Entered text in the element ${locatorName}`);      
    } catch (error) {
      logger.trace(`Failed to enter text in the locator ${locatorName} - ${err}`);
      throw new Error(`Failed to enter text in the locator ${locatorName} - ${err}`);   
    }
  }
};
