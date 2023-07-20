import {  Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage.js";
import DashBoardPage from "../../Pages/DashBoardPage.js";
import PimPage from "../../Pages/PimPage.js";
import JobDetailsPage from "../../Pages/JobDetailsPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashBoardPage();
const pimPage = new PimPage();
const jobDetailsPage = new JobDetailsPage();


Given('open the OrangeHRM application', () => {    
    cy.visit('/')  // url is provided in cypress.config.js file
});

When('I login to the application successfully', function()  {	
    cy.loginOrangeCRM(this.testdata.username, this.testdata.password) //Use of login COMMAND  
    dashboardPage.element.element_pageHeading().should('have.text','Dashboard')
});

Then('I create a new user profile', function() {
        dashboardPage.clickPIM();
        pimPage.cilckAdd();
        cy.wait(2000)
        pimPage.createNewUserJson(this.empData)
        pimPage.saveMessage().should('be.visible').should('have.text',this.empData.successmsg)
});


Then('I navigete to PIM', () => {
	dashboardPage.clickPIM();
});


Then('I search the user profile', function () {
    //cy.wait(10000)
	pimPage.searchEmployeeId(this.empData.id)
    pimPage.labelRecordFound().should('be.visible').should('contain.text', '1')
    
});

Then('I delete the user profile', function () {
    pimPage.deleteRecord();
    pimPage.saveMessage().should('be.visible').should('have.text',this.empData.deleteMsg)

});

Then('I edit the profile information', function () {
    pimPage.clickEditRecord();
  
});

//Steps for Dashboard validation
Then('I validate all the Quick Launch texts on dashboard', function () {
    let countOfElements;
    cy.wrap(this.testdata.quickLaunch).then($elements => {
        countOfElements = $elements.length; //get the size of data list
        dashboardPage.element.quickLaunchGrid().should('have.length',countOfElements).each(($item,index, list) =>{ //validate the count of link in the grid
            expect($item.text().trim()).to.contain(this.testdata.quickLaunch[index]) //Validate the quickLaunch grid element count  

        })
    
    })     
    
});


Then('I edit the profile Job information', function () {
    pimPage.clickJobTab();
    jobDetailsPage.enterDateOfJoin(this.empData.job.dateofJoin)    
    jobDetailsPage.selectJobTitle(this.empData.job.jobTitle);
    jobDetailsPage.selectJobCategory(this.empData.job.jobCategory);
    jobDetailsPage.selectSubUnit(this.empData.job.subUnit);
    jobDetailsPage.selectEmpStatus(this.empData.job.employmentStatus);

});


Then('I save the profile successfully', function() {
	jobDetailsPage.clickSaveJob();
    jobDetailsPage.checkSaveMessage(this.empData.updateMsg)
});

Then('I upload the employee\'s document', function(){
        jobDetailsPage.addFile(this.empData.job.doc)    
        jobDetailsPage.checkFileUploaded(this.empData.job.doc)

    
})

Then('I navigate to user job information', () => {
	pimPage.clickEditRecord();
    pimPage.clickJobTab();
});

Then('I terminate the user profile', function() {
	
    //Terminte Employee
    pimPage.clickJobTab();
    jobDetailsPage.clickEmployeeTermination();
    jobDetailsPage.enterEmpTerminationDate(this.empData.job.termination.dateTermaintion)
    cy.wait(2000)
    jobDetailsPage.selectReason(this.empData.job.termination.reason)
    jobDetailsPage.clickSave()
    cy.wait(2000)
    jobDetailsPage.checkTermainationLabel(this.empData.job.termination.dateTermaintion)
});



