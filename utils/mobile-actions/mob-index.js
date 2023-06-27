const verifyElementIsDisplayed = require('./mob-element-status')
const click = require('@deloitte/web/utils/mobile-actions/mob-click')
const swipeScree = require('@deloitte/web/utils/mobile-actions/screen-swipe')
const enterText = require('@deloitte/web/utils/mobile-actions/mob-entertext')
const click_coordinates = require('./mob-click_coordinates')
const page_actions = require('@deloitte/web/utils/mobile-actions/mob-page-actions')

module.exports = {
  ...verifyElementIsDisplayed,
  ...click,
  ...swipeScree,
  ...enterText,
  ...click_coordinates,
  ...page_actions
  
  
};

