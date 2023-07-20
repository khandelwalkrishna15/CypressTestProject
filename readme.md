# Cypress Web and API Test Automation Project

This repository contains automated tests for a web and API application using Cypress. The tests are organized using the Page Object Model design pattern and incorporate various features and best practices.

## Cucumber Features
This project includes Cucumber feature files to write tests in a behavior-driven development (BDD) style.
All feature files are avaible under folder `cypress\e2e\cucumber-tests\features`
1. apiTest.feature - > 2 GET , POST Scenarios are created. 
    `note:  Json schema validation is failing in cucumber test , but working fine in mocha test, I tried multiple ways but not succeed ` path of mocha test (`cypress\e2e\unitTests\Test_API.cy.js`)

2. newTab.feature : 2 Scenarions to open the new tab and 1 for new window 
3. newUser.feature : Create new user, get user data from fixtures
4. editUser.feature :


## Tags
This project includes cucumber tags, I have used `@usertest` to apply the cucumber hooks for those scenarios only which has `@usertest`
Ex. to run with Cucumber tags :
@Regression tag to run all the scenarios `npx cypress run --env tags=@Regression`


## Step definition files
This project includes stepdefinition files avaible at     `cypress\e2e\cucumber-tests\stepdefinition` location , in these files i have writen all the executable steps for cucumber scebnarios.

## Cucumber Hooks
this project utilize cucumber BDD hooks written in file `cypress\e2e\cucumber-tests\stepdefinition\base.js`
`Before` is used for load test data in from json files avaible in Fixtures folder
`After` is used to logout from application 


### Page Object Model (POM)

The tests are organized using the Page Object Model design pattern, which promotes a structured approach to test automation. The page objects encapsulate the locators and actions of the web elements.
folder path is `cypress\e2e\Pages`
The tests utilize Cypress locators such as `cy.get()`, `cy.contains()`, `cy.find()`, `eq ()` and more to identify and interact with the elements on the web page.


### Commands

Custom commands can be defined in Cypress to encapsulate common actions or assertions. 
`cypress\support\commands.js` whre 2 custom commands are created 
1. loginOrangeCRM
2. getFileNameFromPath 

### Fixture
This project demonstrates how to leverage fixtures to provide test data for various scenarios, improving test reusability and maintainability.
`cypress\fixtures\apiTestData.json`  to api pay load
`cypress\fixtures\employee.json` to add and update emaployee details
`cypress\fixtures\testdata.json` to test login and dashbaord fileds
`cypress\fixtures\schema.json` to validate POST response schema 

### File Upload

The project showcases how to handle file uploads using Cypress. 
It includes examples of uploading `employee profile picture` and `employee documnt`
path of files is provided in `fixtures/employee.json` file 

use `npm install --save-dev cypress-file-upload` for dependencies


### Environment Variables

This project demonstrates how to use environment variables to configure the test environment and handle sensitive information like credentials.

env file location `cypress.env.json`


### Cucumber Reporting

Cypress can generate detailed test reports using Cucumber.
I have used `cucumber-html-report` reporst are generated in `cypress\reportCucumber` folder 
and scrennshots for failed test are avaible at `cypress\screenshots` folder
and Videos are available in folder `cypress\videos`

## Getting Started
2. Install the dependencies: `npm install`
3. Configure your test environment by updating the `cypress.env.json` file with the necessary variables.
4. to Run on cypress cloud please run on CLI : `npm run test2`
5. Run the tests: `npm run test`

To run the tests, use the following command on terminal:
'npm run test'


## note: This is demo app and sometime DOM elements's are changing frequently or due to language changenof application, script will not be able to identify the elements.