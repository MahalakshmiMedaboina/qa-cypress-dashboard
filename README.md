# Cypress Dashboard Demo Project

This project demonstrates how to connect a Cypress testing project with the Cypress Dashboard service.

## Installation

1. Initialize project

npm init

2. Install Cypress

npm install cypress --save-dev

## Running Cypress

Open Cypress GUI

npm run cy:open

Run tests headless

npm run cy:run

## Tools Used

- Cypress
- Node.js
- Cypress Dashboard

## Dashboard Service

Cypress Dashboard allows you to:

- Record test runs
- View screenshots and videos
- Analyze failures
- Run tests in parallel

## Prettier Setup

Prettier is used for consistent code formatting.

Install Prettier

npm install prettier --save-dev

Create configuration file

.touch .prettierrc

Example configuration

{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2
}

## Cypress Configuration

Disable video recording during test execution

video: false

This speeds up execution and reduces disk usage.

## Interview Notes

### What is Cypress?

Cypress is an end-to-end testing framework used for testing modern web applications.

---

### What is a Cypress Spec File?

A spec file contains Cypress test cases.

Example:

submitForm.cy.js

---

### Common Cypress Commands

| Command | Purpose |
|------|------|
| cy.visit() | Opens a webpage |
| cy.get() | Select element |
| cy.type() | Enter text |
| cy.click() | Click element |
| cy.select() | Select dropdown value |
| cy.contains() | Find element by text |
| cy.should() | Assertion |

---

## Running a Single Cypress Spec

To execute a specific test file:

npx cypress run --spec "cypress/e2e/submitForm.cy.js"

---

## Record Single Spec in Cypress Dashboard

Run and record a specific test:

npx cypress run --spec "cypress/e2e/submitForm.cy.js" --record --key <record-key>

This uploads the test results to Cypress Cloud where you can view logs, screenshots, and videos.

---

## Video Recording

Video recording is enabled in `cypress.config.js`:

video: true

Videos help debug failed test executions and are automatically uploaded when using Cypress Dashboard.


### Quick Interview Questions

Q: What does cy.visit() do?  
A: Opens the specified URL in the browser.

Q: What is cy.get() used for?  
A: To locate elements using CSS selectors.

Q: What is an assertion in Cypress?  
A: A validation that checks if the expected result is correct.

**What is Cypress Dashboard?**  
Cypress Dashboard is a cloud service that records test runs and provides logs, screenshots, videos, and analytics.

**Difference between `cypress open` and `cypress run`**  
- `cypress open` → runs tests in interactive mode  
- `cypress run` → runs tests in headless mode for CI/CD

**Why use Prettier?**  
Prettier ensures consistent code formatting across the project.




