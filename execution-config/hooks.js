const { generate } = require("multiple-cucumber-html-reporter");
const cucumberJson = require("wdio-cucumberjs-json-reporter").default;
const { emptyDirSync, ensureDirSync } = require("fs-extra");
const { logger } = require("../logger/log4js");
require("dotenv").config();

const runLightHouseTest = process.env.RUN_LIGHT_HOUSE_TEST !== "false";
// const eachStepScreenshot = process.env.STEP_SCREENSHOT !== 'false';
let stepsArray = [];
// const runAccessibilityTest = process.env.RUN_AXE_TEST !== 'false';

module.exports = {
  // count: 0,
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: () => {
    // Remove the `.tmp/` folder that holds the json and report files
    emptyDirSync(process.env.REPORTS_DIR);
    emptyDirSync(process.env.LOG_FILE_DIR);
    ensureDirSync(process.env.REPORTS_DIR);
    ensureDirSync(process.env.LOG_FILE_DIR);
  },
  /**
   * Gets executed before a worker process is spawned and can be used to initialise specific service
   * for that worker as well as modify runtime environments in an async fashion.
   * @param  {String} cid      capability id (e.g 0-0)
   * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
   * @param  {[type]} specs    specs to be run in the worker process
   * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
   * @param  {[type]} execArgv list of string arguments passed to the worker process
   */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   * @param {String} cid worker id (e.g. 0-0)
   */
  // beforeSession: function (config, capabilities, specs, cid) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs        List of spec file paths that are to be run
   * @param {Object}         browser      instance of created browser/device session
   */
  async before() {
    if (runLightHouseTest) {
      await browser.enablePerformanceAudits();
      logger.info(`Run Light House Parameter is - ${runLightHouseTest}`);
    }
    logger.info("Skipping Light House Test");
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },
  /**
   * Cucumber Hooks
   *
   * Runs before a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  async beforeFeature(uri, feature) {
    const testName = uri.split("/").pop().split(".")[0];
    for (let i = 0; i < feature.children.length; i++) {
      const currentScenario = feature.children[i];
      if (currentScenario.scenario.steps) {
        //   const scenarioTags = await currentScenario.scenario.tags.map((tag) => tag.name.toLowerCase().replace(/\@/g, ''));
        //   if ((scenarioTags.length > 1 && scenarioTags.includes(executionPlatform)) || (scenarioTags.length === 1 && !scenarioTags.includes(executionPlatform))) {
        //     names.push(currentScenario.scenario.steps.map((text) => text.text.replace(/\s/g, '_')));
        //   }
        // } else {
        stepsArray.push(
          currentScenario.scenario.steps.map((text) =>
            text.text.replace(/\s/g, "_")
          )
        );
      }
    }
    stepsArray = stepsArray.flat(1);
  },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world world object containing information on pickle and test step
   */
  // beforeScenario: function (world) {
  // },
  /**
   *
   * Runs before a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   */
  // beforeStep: function (step, scenario) {
  // },
  /**
   *
   * Runs after a Cucumber Step.
   * @param {Pickle.IPickleStep} step     step data
   * @param {IPickle}            scenario scenario pickle
   * @param {Object}             result   results object containing scenario results
   * @param {boolean}            result.passed   true if scenario has passed
   * @param {string}             result.error    error stack if scenario failed
   * @param {number}             result.duration duration of scenario in milliseconds
   */
  async afterStep() {
    // if (process.env.STEP_SCREENSHOT === 'true') {
    await browser
      .takeScreenshot()
      .then(async (val) => {
        const img = await Buffer.from(val, "base64");
        // await sharp(img).resize().toBuffer()
        // .then(async (data) => {
        const screen = img.toString("base64");
        await cucumberJson.attach(screen, "image/png");
      })
      // .catch((error) => {
      // logger.info('error in Resize and compression ', error);
      // });
      // })
      .catch((err) => {
        console.log(err);
        // logger.info('error in take screenshots ', err);
      });
    // }
    this.count += 1;
  },
  /**
   *
   * Runs before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world  world object containing information on pickle and test step
   * @param {Object}                 result results object containing scenario results
   * @param {boolean}                result.passed   true if scenario has passed
   * @param {string}                 result.error    error stack if scenario failed
   * @param {number}                 result.duration duration of scenario in milliseconds
   */
  // afterScenario: function (world, result) {
  // },
  /**
   *
   * Runs after a Cucumber Feature.
   * @param {String}                   uri      path to feature file
   * @param {GherkinDocument.IFeature} feature  Cucumber feature object
   */
  // afterFeature: function (uri, feature) {
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // async after() {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit. An error
   * thrown in the onComplete hook will result in the test run failing.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: () => {
    // Generate the report when it all tests are done
    generate({
      // Required
      // This part needs to be the same path where you store the JSON files
      // default = '.tmp/json/'
      jsonDir: process.env.REPORTS_DIR,
      reportPath: process.env.REPORTS_DIR,
      openReportInBrowser: true,
      pageTitle: "nimbleautom8 web automation",
      pageFooter: "",
      displayDuration: true,
      metadata: [
        { name: "Environment v.", value: "12.3" },
        { name: "Plugin v.", value: "32.1" },
        { name: "Variable set", value: "Foo" },
      ],
      customData: {
        title: "Run info",
        data: [
          {
            label: "Project",
            value: "nimbleautom8 web Automation",
          },
          { label: "Release", value: "1.0" },
          { label: "Cycle", value: "1" },
          { label: "Execution Start Time", value: new Date().toISOString() },
          { label: "Execution End Time", value: new Date().toISOString() },
        ],
      },
      // for more options see https://github.com/wswebcreation/multiple-cucumber-html-reporter#options
    });
  },
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};


// //
//     // =====
//     // Hooks
//     // =====
//     // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
//     // it and to build services around it. You can either apply a single function or an array of
//     // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
//     // resolved to continue.
//     /**
//      * Gets executed once before all workers get launched.
//      * @param {Object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      */
//     // onPrepare: function (config, capabilities) {
//     // },
//     /**
//      * Gets executed before a worker process is spawned and can be used to initialise specific service
//      * for that worker as well as modify runtime environments in an async fashion.
//      * @param  {String} cid      capability id (e.g 0-0)
//      * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
//      * @param  {[type]} specs    specs to be run in the worker process
//      * @param  {[type]} args     object that will be merged with the main configuration once worker is initialized
//      * @param  {[type]} execArgv list of string arguments passed to the worker process
//      */
//     // onWorkerStart: function (cid, caps, specs, args, execArgv) {
//     // },
//     /**
//      * Gets executed just after a worker process has exited.
//      * @param  {String} cid      capability id (e.g 0-0)
//      * @param  {Number} exitCode 0 - success, 1 - fail
//      * @param  {[type]} specs    specs to be run in the worker process
//      * @param  {Number} retries  number of retries used
//      */
//     // onWorkerEnd: function (cid, exitCode, specs, retries) {
//     // },
//     /**
//      * Gets executed just before initialising the webdriver session and test framework. It allows you
//      * to manipulate configurations depending on the capability or spec.
//      * @param {Object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs List of spec file paths that are to be run
//      * @param {String} cid worker id (e.g. 0-0)
//      */
//     // beforeSession: function (config, capabilities, specs, cid) {
//     // },
//     /**
//      * Gets executed before test execution begins. At this point you can access to all global
//      * variables like `browser`. It is the perfect place to define custom commands.
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs        List of spec file paths that are to be run
//      * @param {Object}         browser      instance of created browser/device session
//      */
//     // before: function (capabilities, specs) {
//     // },
//     /**
//      * Runs before a WebdriverIO command gets executed.
//      * @param {String} commandName hook command name
//      * @param {Array} args arguments that command would receive
//      */
//     // beforeCommand: function (commandName, args) {
//     // },
//     /**
//      * Cucumber Hooks
//      *
//      * Runs before a Cucumber Feature.
//      * @param {String}                   uri      path to feature file
//      * @param {GherkinDocument.IFeature} feature  Cucumber feature object
//      */
//     // beforeFeature: function (uri, feature) {
//     // },
//     /**
//      *
//      * Runs before a Cucumber Scenario.
//      * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
//      * @param {Object}                 context  Cucumber World object
//      */
//     // beforeScenario: function (world, context) {
//     // },
//     /**
//      *
//      * Runs before a Cucumber Step.
//      * @param {Pickle.IPickleStep} step     step data
//      * @param {IPickle}            scenario scenario pickle
//      * @param {Object}             context  Cucumber World object
//      */
//     // beforeStep: function (step, scenario, context) {
//     // },
//     /**
//      *
//      * Runs after a Cucumber Step.
//      * @param {Pickle.IPickleStep} step             step data
//      * @param {IPickle}            scenario         scenario pickle
//      * @param {Object}             result           results object containing scenario results
//      * @param {boolean}            result.passed    true if scenario has passed
//      * @param {string}             result.error     error stack if scenario failed
//      * @param {number}             result.duration  duration of scenario in milliseconds
//      * @param {Object}             context          Cucumber World object
//      */
//     // afterStep: function (step, scenario, result, context) {
//     // },
//     /**
//      *
//      * Runs after a Cucumber Scenario.
//      * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
//      * @param {Object}                 result           results object containing scenario results
//      * @param {boolean}                result.passed    true if scenario has passed
//      * @param {string}                 result.error     error stack if scenario failed
//      * @param {number}                 result.duration  duration of scenario in milliseconds
//      * @param {Object}                 context          Cucumber World object
//      */
//     // afterScenario: function (world, result, context) {
//     // },
//     /**
//      *
//      * Runs after a Cucumber Feature.
//      * @param {String}                   uri      path to feature file
//      * @param {GherkinDocument.IFeature} feature  Cucumber feature object
//      */
//     // afterFeature: function (uri, feature) {
//     // },
    
//     /**
//      * Runs after a WebdriverIO command gets executed
//      * @param {String} commandName hook command name
//      * @param {Array} args arguments that command would receive
//      * @param {Number} result 0 - command success, 1 - command error
//      * @param {Object} error error object if any
//      */
//     // afterCommand: function (commandName, args, result, error) {
//     // },
//     /**
//      * Gets executed after all tests are done. You still have access to all global variables from
//      * the test.
//      * @param {Number} result 0 - test pass, 1 - test fail
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs List of spec file paths that ran
//      */
//     // after: function (result, capabilities, specs) {
//     // },
//     /**
//      * Gets executed right after terminating the webdriver session.
//      * @param {Object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {Array.<String>} specs List of spec file paths that ran
//      */
//     // afterSession: function (config, capabilities, specs) {
//     // },
//     /**
//      * Gets executed after all workers got shut down and the process is about to exit. An error
//      * thrown in the onComplete hook will result in the test run failing.
//      * @param {Object} exitCode 0 - success, 1 - fail
//      * @param {Object} config wdio configuration object
//      * @param {Array.<Object>} capabilities list of capabilities details
//      * @param {<Object>} results object containing test results
//      */
//     // onComplete: function(exitCode, config, capabilities, results) {
//     // },
//     /**
//     * Gets executed when a refresh happens.
//     * @param {String} oldSessionId session ID of the old session
//     * @param {String} newSessionId session ID of the new session
//     */
//     // onReload: function(oldSessionId, newSessionId) {
//     // }