const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://adopet-frontend-cypress.vercel.app",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    },
  },
});
