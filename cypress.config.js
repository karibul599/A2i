const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout:30000,
  reporter: 'cypress-mochawesome-reporter', 
  screenshotOnRunFailure: true, 
  screenshotsFolder: 'screenshots-folder',
  projectId: '44jcxm', 
  video: true, 
  e2e: {
   // baseUrl: 'http://192.168.30.101:9090',
    viewportWidth: 1280, 
    viewportHeight:780,
    experimentalOriginDependencies: true, 
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});


