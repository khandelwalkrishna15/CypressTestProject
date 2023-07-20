import PimPage from "./Pages/PimPage";
import LoginPage from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";
import JobDetailsPage from "./Pages/JobDetailsPage";

const login = new LoginPage();
const pimpage = new PimPage();
const dashboard = new DashBoardPage();
const jobPage = new JobDetailsPage();
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
  
    it('Create a new user successful login', {browser : 'chrome'},  function () {

               
        dashboard.clickPIM();
        pimpage.cilckAdd();
        cy.wait(2000)
        pimpage.createNewUserJson(this.empData)
        pimpage.saveMessage().should('be.visible').should('have.text',this.empData.successmsg)
        cy.wait(2000)
        pimpage.clickJobTab();
        jobPage.enterDateOfJoin(this.empData.job.dateofJoin)
        
        jobPage.selectJobTitle(this.empData.job.jobTitle);
        jobPage.selectJobCategory(this.empData.job.jobCategory);
        jobPage.selectSubUnit(this.empData.job.subUnit);
        jobPage.selectEmpStatus(this.empData.job.employmentStatus);

        //Terminte Employee
        jobPage.clickEmployeeTermination();
        jobPage.enterEmpTerminationDate(this.empData.job.termination.dateTermaintion)
        cy.wait(2000)
        jobPage.selectReason(this.empData.job.termination.reason)
        jobPage.clickSave()
        cy.wait(5000)
        jobPage.checkTermainationLabel(this.empData.job.termination.dateTermaintion)
    })

});
