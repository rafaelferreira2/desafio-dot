const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    baseUrl: "https://front.serverest.dev",
    env: {
      apiUrl: "https://serverest.dev"
    },
    requestTimeout: 15000
  },
});
