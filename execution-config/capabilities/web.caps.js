module.exports = [{

    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 5,
    //
    browserName: process.env.BROWSER_NAME, //change the browser name in .env file (example: firefox etc).
    'moz:firefoxOptions': {
      binary: '/Applications/Firefox.app/Contents/MacOS/firefox', // Provide the firefox application path
      path: './../../node_modules/geckodriver/geckodriver', //Provide geckodriver path
      //args: ['-headless']
    },
    acceptInsecureCerts: true,
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
    'cjson:metadata': {
      // For a browser
      browser: {
        name: 'chrome',
        version: '114',

      },
      device: process.env.DEVICE_NAME,
      platform: {
        name: 'OSX',
        version: '13.4',
      },
    },
  }];