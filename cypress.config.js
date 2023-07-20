const { defineConfig } = require("cypress");
//BDD 
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config)
  on("file:preprocessor", browserify.default(config))
  // require('cypress-mochawesome-reporter/plugin')(on); 
  return config;

}

module.exports = defineConfig({
  projectId: "d9494o",
  reporter: "cypress-mochawesome-reporter",

  e2e: {

    defaultCommandTimeout: 6000,
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    specPattern: ["**/*.feature"],
    watchForFileChanges: false,
    excludeSpecPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/",
    screenshotsFolder: 'cypress/screenshots/',
    setupNodeEvents
  }

});
