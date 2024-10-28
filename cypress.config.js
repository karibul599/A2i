const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', 
  screenshotOnRunFailure: true, 
  screenshotsFolder: 'my-custom-screenshots-folder',
  projectId: '44jcxm', 
  video: true, 
  e2e: {
    baseUrl: 'http://192.168.30.123:8099',
    viewportWidth: 1280, 
    viewportHeight: 720,
    experimentalOriginDependencies: true, 
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});


