const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "ta1pc2",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {},
  },
})