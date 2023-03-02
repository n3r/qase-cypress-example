# qase-cypress-example
Qase reports for Cypress

This repository contains an example of Qase Reporter for Cypress.

# Usage
To execute tests, you have to define `apiToken` and `projectCode` in `cypress.config.js`.

Also, you have to do the following things in Qase:
1. Create a new project
2. Create two test cases with ids `1` and `2`

After that, you can execute your tests using the following commands:
### Linux / MacOS
`export QASE_REPORT=1 && npx cypress run`

### Windows
```
set QASE_REPORT=1
npx cypress run
```