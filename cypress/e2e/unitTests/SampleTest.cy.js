
describe('Test Suite', ()=>{

    it('BstackDemo successful login', {browser : 'chrome'}, ()=>{
        cy.visit('/');
        cy.login('Admin','admin123')
        cy.contains("PIM").click();
        cy.log('Print url -> ' +cy.url)
        
        })

        it('BstackDemo successful login', () =>{
            cy.visit('/');
            cy.xpath("//input[@name='username']").type("Admin")
            cy.xpath("//input[@name='password']").type("admin123")
            cy.xpath("//button[@type='submit']").click();
            cy.contains("PIM").click();
            cy.log('Print url -> ' +cy.url)
            
            })
});