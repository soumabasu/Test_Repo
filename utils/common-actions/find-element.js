
const { allPageObjects } = require(`${process.cwd()}/page-objects/allPagesObject`);

const getElement = async (locatorKey) => {
  const elementSelector = await $(allPageObjects[locatorKey]);
  await elementSelector.waitUntil(async () => elementSelector.waitForExist(
    {
      timeout: 1000 * 120,
      timeoutMsg: `Unable to find element - ${locatorKey} in 120*1000 milliseconds`,
    },
  ));
  return elementSelector;
};

const getElements = async (multipleElementsLocatorKey) => {
  /* Since elementSelector is an object array,function needs to be updated. */
  const elementSelector = await $$(allPageObjects[multipleElementsLocatorKey]);
  await elementSelector.waitUntil(async () => elementSelector.waitForExist(
    {
      timeout: 1000 * 120,
      timeoutMsg: `Unable to find elements- ${multipleElementsLocatorKey} in 120*1000 milliseconds`,
    },
  ));
  return elementSelector;
};

module.exports = {
  getElement,
  getElements,
};
