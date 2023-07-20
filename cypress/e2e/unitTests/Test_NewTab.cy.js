
describe('Handling of new browser Tab', () => {

    it('Handling new Browser Tab with removing the target attribute', function () {
        cy.visit(Cypress.env('tab_test_url'))
        cy.get('#opentab').invoke('removeAttr', 'target').click() //by removing the attribute 'target'
        cy.url().should('include', Cypress.env('new_Window_Test_Url'))
        cy.xpath('//h1').should('have.text', 'All Courses')
        cy.wait(200)
        cy.go('back')
    })

    it('Handling new Browser Tab without removing the target attribute', function () {
        cy.visit(Cypress.env('tab_test_url'))
        cy.get('#opentab').then(newtab =>{
            const hrefTab = newtab.prop('href')
            cy.visit(hrefTab)
            cy.url().should('include', Cypress.env('new_Window_Test_Url'))
            cy.xpath('//h1').should('have.text', 'All Courses')
            cy.wait(200)
            cy.go('back')

        }) 
      
    })

    it('Handling new Browser Window', function () {
        cy.visit(Cypress.env('tab_test_url'))
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = Cypress.env('new_Window_Test_Url');
            }).as("popup")
        })
        cy.get('#openwindow').click()
        cy.xpath('//h1').should('have.text', 'All Courses')
        cy.wait(200)
        cy.go('back')
    })
})