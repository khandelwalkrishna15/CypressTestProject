/*
 *This Page class included elements of JobDetailsPage and the fucntions on those elements 
 * Job tab is part Of PIM but i have created a new page for Job for 
 */

class JobDetailsPage {

    element = {
        joinDate: () => cy.get('.oxd-date-input > .oxd-input'),
        dropDownJobTitle: () => cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        dropJobCategory: () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        dropdownEmpStatus: () => cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        dropdownSubUnit: () => cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'),
        dropdownoptions: () => cy.get('.oxd-select-option > span'),
        btnSaveJob: () => cy.get("button[type='submit']").eq(0),
        msgSave: () => cy.get('.oxd-text--toast-message'),
        btnAddFile: () => cy.get(':nth-child(2) > .orangehrm-action-header > .oxd-button'),
        btnBrowseFile: () => cy.get("input[type='file']"),
        labelFile: () => cy.get('.oxd-file-input-div')
    }

    elementTerminateEmp = {
        linkTerminate: () => cy.get(':nth-child(3) > .orangehrm-action-header > .oxd-button'),
        dateTermination: () => cy.get('.oxd-form > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input'),
        headerEmpDelete: () => cy.contains("Terminate Employment"),
        dropReason: () => cy.get('.oxd-form > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
        dropdownoptions: () => cy.get('.oxd-select-option > span'),
        btnSave: () => cy.get("div[role='document'] button[type='submit']"),
        labelTerminationOn: () => cy.get('.oxd-text--h6 > .oxd-text')
    }

    enterDateOfJoin(date) {
        this.element.joinDate().type(date)
    }

    selectJobTitle(jobTitle) {
        this.element.dropDownJobTitle().click({ force: true });
        this.element.dropdownoptions().contains(jobTitle).click({ force: true })
    }

    selectJobCategory(jobCategory) {
        this.element.dropJobCategory().click({ force: true });
        this.element.dropdownoptions().contains(jobCategory).click({ force: true })
    }

    selectEmpStatus(empStatus) {
        this.element.dropdownEmpStatus().click({ force: true });
        this.element.dropdownoptions().contains(empStatus).click({ force: true })
    }

    selectSubUnit(subUnit) {
        this.element.dropdownSubUnit().click({ force: true });
        this.element.dropdownoptions().contains(subUnit).click({ force: true })
    }

    clickSaveJob() {
        this.element.btnSaveJob().click({ force: true })
    }

    clickEmployeeTermination() {
        this.elementTerminateEmp.linkTerminate().click();
    }

    enterEmpTerminationDate(date) {
        this.elementTerminateEmp.dateTermination().type(date);
        this.elementTerminateEmp.headerEmpDelete().click({ force: true })
    }

    selectReason(reason) {
        this.elementTerminateEmp.dropReason().click({ force: true });
        this.elementTerminateEmp.dropdownoptions().contains(reason).click({ force: true })
    }

    clickSave() {
        this.elementTerminateEmp.btnSave().click();
    }

    checkSaveMessage(message) {
        this.element.msgSave().should('be.visible').should('have.text', message)

    }

    checkTermainationLabel(datatext) {

        this.elementTerminateEmp.labelTerminationOn().should('have.text', 'Terminated on: ' + datatext)
    }

    addFile(filePath) {
        this.element.btnAddFile().click();
        this.element.btnBrowseFile().selectFile(filePath, { force: true })
    }

    checkFileUploaded(filePath) {
        const filename = filePath.substring(filePath.lastIndexOf('/') + 1);
        this.element.labelFile().should('contain.text', filename)
    }
}
export default JobDetailsPage