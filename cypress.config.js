const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: "ta1pc2",
  video: true,
  e2e: {
    setupNodeEvents(on, config) {},
  },
})