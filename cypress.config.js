const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pe3e53',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
