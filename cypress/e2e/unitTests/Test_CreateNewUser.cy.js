import PimPage from "./Pages/PimPage";
import LoginPage from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";

const login = new LoginPage();
const pimpage = new PimPage();
const dashboard = new DashBoardPage();
describe('Test Suite', ()=>{

    before('Login into the application', () => {
        cy.visit('/')
        cy.fixture('employee').then(function (empData) {
            this.empData = empData
        })

        cy.fixture('testdata').then(function (testdata) {
            cy.loginOrangeCRM(testdata.username, testdata.password) //Use of login command 
        })
    })
  
    it('Create a new user successful login', {browser : 'chrome'}, function () {
       
        dashboard.element.linkPIM().click();
        pimpage.cilckAdd();
        cy.wait(2000)
        pimpage.createNewUserJson(this.empData)
        pimpage.saveMessage().should('be.visible').should('have.text',this.empData.successmsg)


    })

});
