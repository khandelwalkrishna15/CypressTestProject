
import LoginPage from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";

describe('Test Suite', ()=>{
    const  login = new LoginPage();
    const dashBoard = new DashBoardPage();

  //   beforeEach('Login into the application', () => {
  //     cy.visit('/')
  //     cy.fixture('testdata').then(function (testdata) {
  //          //Use of login command 
  //     })
  // })
  

  beforeEach(function () {
    cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
    })
})

it('Validate successful Login', function () {
  cy.visit('/')
  login.loginToApplicationJson(this.testdata)
  dashBoard.element_pageHeading().should('have.text','Dashboard')
  cy.wait(2000)
  dashBoard.logoutMethod();
  cy.wait(2000)
})



});