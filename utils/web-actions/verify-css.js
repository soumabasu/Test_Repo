const { expect } = require('chai');
const {logger} = require('../../logger/log4js');

const {COLORS, FONT_FAMILY, FONT_WEIGHT, FONT_LINE_HEIGHT, FONT_SIZE,} = require(`${process.cwd()}/test-data/assets/flatTranslations.js`);
const { getElement } = require('../common-actions/find-element');


module.exports = {

  verifyCssColorProperty: async (locatorName, color) => {
    const expectedColor = COLORS[color];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('color').then((actualColor) => {
      expect(actualColor.value).to.be.equal(expectedColor);
      logger.info(`CSS color property - ${expectedColor} | Actual - ${actualColor}`);
    }).catch((err) => {
      logger.trace(`CSS Color Property Verification Failure - ${err}`);
      throw new Error(`CSS Color Property Verification Failure - ${err}`);
    });
  },

  verifyCssBackgroundColorProperty: async (locatorName, backgroundColor) => {
    const expectedBackgroundColor = COLORS[backgroundColor];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('background-color')
      .then((actualColor) => {
        expect(actualColor.value).to.be.equal(expectedBackgroundColor);
        logger.info(`CSS background-color Verification - ${expectedBackgroundColor} | Actual - ${actualColor}`);
      })
      .catch((err) => {
        logger.trace(`CSS background-color Property mismatch - ${err}`);
        throw new Error(`CSS background-color Property mismatch - ${err}`);
      });
  },

  verifyCssFontFamilyProperty: async (locatorName, font) => {
    const expectedFont = FONT_FAMILY[font];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('font-family')
      .then((actualFont) => {
        expect(actualFont.value).to.be.equal(expectedFont);
        logger.info(`CSS background-color Verification - ${expectedFont} | Actual - ${actualFont}`);
      })
      .catch((err) => {
        logger.trace(`CSS font-family Property mismatch - ${err}`);
        throw new Error(`CSS font-family Property mismatch - ${err}`);
      });
  },

  verifyMultipleColors: async (table) => {
    const tableData = table.hashes();
    await tableData.forEach(async (row) => {
      await this.verifyCssColorProperty(row.LocatorName, row.Colors);
    });
  },

  verifyCssFontWeight: async (locatorName, fontWeight) => {
    const expectedFontWeight = FONT_WEIGHT[fontWeight];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('font-weight')
      .then((actualFontWeight) => {
        expect(actualFontWeight.value).to.be.equal(expectedFontWeight);
        logger.info(`CSS font-weight Verification - Expected ${expectedFontWeight} | Actual - ${actualFontWeight}`);
      })
      .catch((err) => {
        logger.trace(`CSS font-weight Property mismatch - ${err}`);
        throw new Error(`CSS font-weight Property mismatch - ${err}`);
      });
  },

  verifyCssStrokeProperty: async (locatorName, color) => {
    const expectedColor = COLORS[color];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('stroke')
      .then((actualColor) => {
        expect(actualColor.value).to.be.equal(expectedColor);
        logger.info(`CSS stroke Verification - Expected ${expectedColor} | Actual - ${actualColor}`);
      })
      .catch((err) => {
        logger.trace(`CSS stroke Property mismatch - ${err}`);
        throw new Error(`CSS stroke Property mismatch - ${err}`);
      });
  },

  verifyCssFillProperty: async (locatorName, color) => {
    const expectedColor = COLORS[color];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('fill')
      .then((actualColor) => {
        expect(actualColor.value).to.be.equal(expectedColor);
        logger.info(`CSS fill Verification - Expected ${expectedColor} | Actual - ${actualColor}`);
      })
      .catch((err) => {
        logger.trace(`CSS fill Property mismatch - ${err}`);
        throw new Error(`CSS fill Property mismatch - ${err}`);
      });
  },

  verifyCssFontSize: async (locatorName, fontSize) => {
    const expectedFontSize = FONT_SIZE[fontSize];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('font-size')
      .then((actualFontSize) => {
        expect(actualFontSize.value).to.be.equal(expectedFontSize);
        logger.info(`CSS font-size Verification - Expected ${expectedFontSize} | Actual - ${actualFontSize}`);
      })
      .catch((err) => {
        logger.trace(`CSS font-size Property mismatch - ${err}`);
        throw new Error(`CSS font-size Property mismatch - ${err}`);
      });
  },

  verifyCssLineHeight: async (locatorName, fontLineHeight) => {
    const expectedFontSize = FONT_LINE_HEIGHT[fontLineHeight];
    const ele = await getElement(locatorName);
    await ele.getCSSProperty('line-height')
      .then((actualFontSize) => {
        expect(actualFontSize.value).to.be.equal(expectedFontSize);
        logger.info(`CSS line-height Verification - Expected ${expectedFontSize} | Actual - ${actualFontSize}`);
      })
      .catch((err) => {
        logger.trace(`CSS line-height Property mismatch - ${err}`);
        throw new Error(`CSS line-height Property mismatch - ${err}`);
      });
  },

  verifyMultipleFontWeights: async (table) => {
    const tableData = table.hashes();
    await tableData.forEach(async (row) => {
      await this.verifyCssFontWeight(row.LocatorName, row.FontWeight);
    });
  },
};
