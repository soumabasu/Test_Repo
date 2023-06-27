const path = require('path');
const { readSync, ABSOLUTE_PATHS } = require('readdir');
const allPageObjects = {};

const arr = readSync((process.cwd(), __dirname), ['*.js'], ABSOLUTE_PATHS);

arr.forEach((file) => {
  // eslint-disable-next-line global-require
  const fileObject = require(path.resolve(process.cwd(), __dirname, file));
  Object.assign(allPageObjects, fileObject);
});

Object.keys(allPageObjects).filter((locator) => Object.keys(allPageObjects[locator]).forEach((key) => {
  if (allPageObjects[locator][key] === null || allPageObjects[locator][key] === '') {
    delete allPageObjects[locator][key];
  }
}));

exports.allPageObjects = allPageObjects;
