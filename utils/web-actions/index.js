const verifyText = require('./verify-text');
const click = require('./click');
const verifyCss = require('./verify-css');
const enterText = require('./enter-text');
const scroll = require('./scroll');
const elementStatus = require('./element-status');
const pageActions = require('./page-actions');
const select = require('./select');
const dragAndDrop = require('./drag-drop');
const fetchData = require('./fetch')

module.exports = {
  ...verifyText,
  ...click,
  ...verifyCss,
  ...enterText,
  ...scroll,
  ...elementStatus,
  ...pageActions,
  ...select,
  ...dragAndDrop,
  ...fetchData,
  
};
