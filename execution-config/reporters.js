module.exports = [
  // Like this with the default options, see the options below
  // 'cucumberjs-json',

  // OR like this if you want to set the folder and the language
  ['cucumberjs-json', {
    jsonFolder: process.env.REPORTS_DIR,
    language: 'en',
  }],
  ['spec', {
    symbols: {
      passed: '✔',
      failed: '✖',
      skipped: '–',
    },
  }],
];
