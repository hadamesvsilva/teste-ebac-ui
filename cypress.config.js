const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5e5s4t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
