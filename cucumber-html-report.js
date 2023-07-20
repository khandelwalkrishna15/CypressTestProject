const report = require("multiple-cucumber-html-reporter");
const date = new Date();
report.generate({
  jsonDir: "./cypress/reportCucumber",
  reportPath: "./cypress/reportCucumber",
  metadata: {
    browser: {
      name: "chrome",
      version: "113",
    },
    device: "Local test machine",
    platform: {
      name: "Microsoft Windows 11 pro",
      version: "10.00.22000",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Cypress Nagp Project" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: date },
      { label: "Execution End Time", value: date },
    ],
  },
});