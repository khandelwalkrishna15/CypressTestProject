/*
 *This Page class included elements of PIM Page and the fucntions on those elements 
 * 
 */

class PimPage {


    btnAdd() {
        return cy.contains('button', 'Add')

    }
    //Add Employee

    txtFirstName() {
        return cy.get("input[placeholder='First Name']")
    }

    txtLastName() {
        return cy.get("input[placeholder='Last Name']")
    }

    txtEmpId() {
        return cy.get("input[class='oxd-input oxd-input--active']").eq(1)
    }

    btnAddPicture() {
        return cy.get("input[type='file']")
    }

    chkCreateLogin() {
        return cy.get("div[class='oxd-switch-wrapper'] label")
    }

    txtUsername() {
        return cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

    txtPassword() {
        return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    txtConfrmPassword() {
        return cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')

    }

    btnSave() {
        return cy.contains('Save')
    }

    saveMessage() {
        return cy.get('.oxd-text--toast-message')
    }

    linkEmpList() {
        return cy.contains("Employee List")
    }

    txtSerachEmpById() {
        return cy.get('.oxd-input.oxd-input--active').eq(1)
    }
    btnSearch() {
        return cy.contains('Search')
    }

    labelRecordFound() {
        return cy.get('.orangehrm-vertical-padding > span')
    }

    txtRecordId() {
        return cy.get('.oxd-table-card> div > div').find('.oxd-checkbox-input').eq(1).click({ force: true });

    }

    linkDelRecord() {
        return cy.get('.oxd-table-card > .oxd-table-row > div').find('.oxd-table-cell-action-space').eq(0)
    }
    linkEditRecord() {
        return cy.get('.oxd-table-card > .oxd-table-row > div').find('.oxd-table-cell-action-space').eq(1)
    }

    lblRecordCount() {
        cy.contains('(1) Record Found')
    }

    btnConfirmDelete() {
        return cy.get('.oxd-button--label-danger')
    }

    lableName() {
        return cy.get('.oxd-text.oxd-text--h6.--strong')
    }

    tabJob() {
        return cy.get('a:contains("Job")').first()
    }

    //function to login into application
    cilckAdd() {
        this.btnAdd().click({ force: true })
    }

    clickAddPicture() {
        this.btnAddPicture();
    }

    uploadpicture(filePath) {

        this.btnAddPicture().selectFile(filePath, { force: true })
    }


    clickCreateLoginDetails() {
        this.chkCreateLogin().click();
    }



    // This function will be used to create a new Employee profile use Login Credebtials
    createNewUser(firstName, lastName, filePath, username, password) {
        this.txtFirstName().type(firstName);
        this.txtLastName().type(lastName);
        this.btnAddPicture().selectFile(filePath, { force: true })
        this.chkCreateLogin().click();
        this.txtUsername().type(username);
        this.txtConfrmPassword().type(password);
        this.txtPassword().type(password);

    }

    createNewUserJson(data) {
        this.txtFirstName().type(data.firstName);
        this.txtLastName().type(data.lastName);
        this.txtEmpId().clear().type(data.id)
        this.btnAddPicture().selectFile(data.imagePath, { force: true })
        this.btnSave().click()

    }

    //Click employee list 
    clickEmployeeList() {
        this.linkEmpList().click();
    }

    searchEmployeeId($empId) {
        this.linkEmpList().click();
        this.txtSerachEmpById().type($empId)
        this.btnSearch().click({ force: true });
        cy.wait(3000)
    }

    deleteRecord() {
        this.linkDelRecord().click({ force: true });
        this.btnConfirmDelete().click({ force: true });
    }
    clickEditRecord() {
        this.linkEditRecord().click({ force: true });
    }

    clickJobTab() {
        this.tabJob().click({ force: true });
    }

    checkLabelRecord() {
        this.labelRecordFound().should('be.visible').and('contain.text', '1')
    }


}
export default PimPage