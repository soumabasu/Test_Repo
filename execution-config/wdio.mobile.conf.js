const path = require('path');
const dotenv = require('dotenv');
const {
  onPrepare, onComplete, afterStep, beforeFeature, after,
} = require('./hooks');
const androidCapabilities = require('./capabilities/android_mobile.caps');
const iosCapabilities = require('./capabilities/ios_mobile.caps');
const capabilities = [];

if (process.env.PLATFORM_NAME === 'android') {
  capabilities.push(...androidCapabilities);
} else if (process.env.PLATFORM_NAME === 'iOS') {
  capabilities.push(...iosCapabilities);
}
const reporters = require('./reporters');

dotenv.config();

exports.config = {
  params: {},
  async: false,
  count: 0,
 
  //
  specs: [
    path.join(process.cwd(), process.env.SPEC_NAME)
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],

  //
  capabilities: capabilities,
  maxInstances: 10,
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  //
  // Set specific log levels per logger
  // loggers:
  // - webdriver, webdriverio
  // - @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
  // - @wdio/mocha-framework, @wdio/jasmine-framework
  // - @wdio/local-runner
  // - @wdio/sumologic-reporter
  // - @wdio/cli, @wdio/config, @wdio/utils
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: process.env.LOG_LEVEL || 'error',
  // logLevels:
  // {
  // webdriver: 'info',
  //   webdriverio: 'info',
  //     '@wdio/selenium-standalone-service': 'info',
  // },
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  // baseUrl: 'http://google.com',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['appium'],
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'cucumber',
  //
  // The number of times to retry the entire specfile when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter
  reporters,

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [

      // path.join(process.cwd(),'step-definitions', 'Given.js'),
      path.join(process.cwd(), 'node_modules', '@deloitte', 'web', 'step-definitions', 'web-given.js'),
      path.join(process.cwd(), 'node_modules', '@deloitte', 'web', 'step-definitions', 'web-then.js'),
      path.join(process.cwd(), 'node_modules', '@deloitte', 'web', 'step-definitions', 'web-when.js'),
      path.join(process.cwd(), 'node_modules', '@deloitte', 'web', 'step-definitions', 'mobile-given.js'),
      path.join(process.cwd(), 'node_modules', '@deloitte', 'web', 'step-definitions', 'mobile-then.js'),
      path.join(process.cwd(), 'node_modules', '@deloitte', 'web', 'step-definitions', 'mobile-when.js')
    ],
    // require:['./step-definitions/Given.js','./step-definitions/When.js','./step-definitions/Then.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false,
  },
  beforeFeature,
  afterStep,
  onPrepare,
  onComplete,
  after,
};
