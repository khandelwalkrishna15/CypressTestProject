import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import DashBoardPage from "../../Pages/DashBoardPage";
const dashboardPage = new DashBoardPage();


//Cucumber hooks use in this feature file , in this hook getting the fixture data from json files
Before({ tags: '@usertest' }, function () {
    cy.fixture('employee').then(function (empData) {
        this.empData = empData
    })
    cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
    })

});
// logout the application 
After({ tags: '@usertest' }, function () {
    dashboardPage.logoutMethod();
})