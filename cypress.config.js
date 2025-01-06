const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pyc1d4",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter:'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyyy_HHMMss" }
  },
});
