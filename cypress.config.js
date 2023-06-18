const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl:'https://qateste1--lojamodess.myvtex.com/',
    viewportWidth: 1280,
    viewportHeight: 920,
    defaultCommandTimeout: 15000,
    //pageLoadTimeout: 15000
  },
});
