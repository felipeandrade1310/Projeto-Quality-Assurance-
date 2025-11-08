const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://adopet-frontend-cypress.vercel.app",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,     // reexecuta flaky tests em headless
      openMode: 0
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    },
    setupNodeEvents(on, config) {
      // logs de API, mocks e integração CI
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-dev-shm-usage')
        }
        return launchOptions
      })
    },
  },
});
