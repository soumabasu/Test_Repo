const flat_translations = require('./translations.json');
const { rgba_colors, font_weight, element_constants, font_family, font_size, font_line_height } = require('./constants.json');
const { css_selector } = require('./selector.json');
const flatten = require('flat');

const TRANSLATIONS = flatten(flat_translations);
const COLORS = flatten(rgba_colors);
const FONT_WEIGHT = flatten(font_weight);
const ELEMENT_ATTIRIBUTES_CONSTANTS = flatten(element_constants);
const FONT_FAMILY = flatten(font_family);
const FONT_SIZE = flatten(font_size);
const FONT_LINE_HEIGHT = flatten(font_line_height);
const SELECTOR = flatten(css_selector);

module.exports = {
  TRANSLATIONS,
  COLORS,
  FONT_WEIGHT,
  ELEMENT_ATTIRIBUTES_CONSTANTS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_LINE_HEIGHT,
  SELECTOR
};