const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-qase-reporter/dist')(on, config);// implement node event listeners here
    },
  },
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    mode: "testops",
    screenshotFolder: 'screenshots',
    videoFolder: 'videos',
    apiToken: '<API_TOKEN>',
    projectCode: '<PROJECT_CODE>',
    logging: true,
    basePath: 'https://api.qase.io/v1',
    sendScreenshot: true,
    runComplete: true
  },
});
