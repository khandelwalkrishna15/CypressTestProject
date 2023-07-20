
describe('Test Suite', ()=>{

    it('Invalid login test', {browser : 'chrome'}, ()=>{
       
       cy.visit('/')
       cy.fixture("example").as("data")

       cy.get("@data").then((user)=>{
        user.data.forEach(element => {
            cy.login(element.username, element.password)
            cy.get('.oxd-alert-content-text').should('have.text','Invalid credentials')
        });
       })
        
        })

});