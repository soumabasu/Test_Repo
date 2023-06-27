// this file generates the execution logs

require("dotenv").config();
// eslint-disable-next-line import/no-extraneous-dependencies
const log4js = require('log4js');

log4js.configure(
  {
    appenders: {
      execution: {
        type: 'fileSync',
        filename: `${process.cwd()}/${process.env.LOG_FILE_DIR}/execution.log`,
        maxLogSize: 10485760,
        backups: 3,
        compress: true,
        flags: 'w',
      },
      console: {
        type: 'console',
      },
    },
    categories: {
      default: {
        appenders: ['execution', 'console'],
        level: process.env.LOG_LEVEL || 'error',
      },
    },
  },
);

const logger = log4js.getLogger('execution');

module.exports = { logger };
