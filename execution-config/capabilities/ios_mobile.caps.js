
module.exports = [{

  "platformName": process.env.PLATFORM_NAME,
  "appium:platformVersion": process.env.IOS_VERSION,
  "appium:automationName": "XCUITest",
  "appium:fullReset": true,
  "appium:noReset": false,
  "appium:deviceName": process.env.IOS_DEVICE_NAME,
  "appium:udid": process.env.UDID,
  "appium:updatedWDABundleId": "com.facebook.WebDriverAgentRunnerTesting",
  "appium:agentPath": process.env.WEBDRIVERAGENT_RUNNER,
   path: '/wd/hub',


  'cjson:metadata': {
    app: {
      name: 'Safari',
      version: '1.0.0',
    },
    device: process.env.IOS_DEVICE_NAME,
    platform: {
      name: '',
      version: '',
    },
  },
  
  }
]