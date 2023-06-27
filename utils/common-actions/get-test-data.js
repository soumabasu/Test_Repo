const userTestData = require(`${process.cwd()}/test-data/user-data`);
const generalTestData = require(`${process.cwd()}/test-data/general-data`);
const { logger } = require('../../logger/log4js');

module.exports = {

  getUserTestData : async (testDataKey, user) => {
    if (!userTestData[user][testDataKey]) {
      logger.error('Invalid Test Data Key Shared. Please provide correct Test Data Key');
      throw new Error('Invalid Test Data Key Shared. Please provide correct Test Data Key');
    } 
    return userTestData[user][testDataKey];
    },

  getGeneralTestData: async (testDataKey) => {
     if (!generalTestData[testDataKey]) {
       logger.error('Invalid Test Data Key Shared. Please provide correct Test Data Key');
       throw new Error('Invalid Test Data Key Shared. Please provide correct Test Data Key');
    } 
    return generalTestData[testDataKey];
    },
}