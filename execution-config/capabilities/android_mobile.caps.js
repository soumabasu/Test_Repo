
module.exports = [{

  'appium:platformName': process.env.PLATFORM_NAME,
  'appium:platformVersion': process.env.ANDROID_VERSION,
  'appium:app': process.env.ANDROID_APK_PATH,
  'appium:automationName': 'UIAutomator2',
  'appium:fullReset': true,
  'appium:noReset': false,
  // 'appium:appPackage': process.env.APP_PACKAGE,
  // 'appium:appActivity': process.env.APP_ACTIVITY,
  'appium:deviceName': process.env.ANDROID_DEVICE_ID,
   path: '/wd/hub',


  'cjson:metadata': {
    app: {
      name: '',
      version: '1.0.0',
    },
    device: process.env.ANDROID_DEVICE_NAME,
    platform: {
      name: '',
      version: '',
    },
  },
  
  }
]