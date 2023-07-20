/*
 *This Page class included elements of Dashboard and the fucntions on those elements 
 * 
 */

class DashBoardPage {

    element = {
        element_dropdown: () => cy.get('.oxd-userdropdown-name'),
        element_logout: () => cy.contains('a', 'Logout'),
        element_pageHeading: () => cy.get('.oxd-topbar-header-breadcrumb-module'),
        linkPIM: () => cy.contains("PIM"),
        quickLaunchGrid: () => cy.get('.orangehrm-quick-launch-card')

    }

    element_pageHeading() {
        return cy.get('.oxd-topbar-header-breadcrumb-module')
    }

    logoutMethod() {
        this.element.element_dropdown().click();
        this.element.element_logout().click();
    }

    clickPIM() {
        this.element.linkPIM().click()
    }

    clickProfileropdown() {
        this.element.element_dropdown().click()
    }

    clickLogout() {
        this.element.element_logout().click()
    }
}
export default DashBoardPage
