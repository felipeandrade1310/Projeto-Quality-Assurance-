const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://adopet-frontend-cypress.vercel.app",
    video: true,
    screenshotOnRunFailure: true,
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
      // eventos personalizados se quiser depois (relatórios, etc)
    },
  },
});
