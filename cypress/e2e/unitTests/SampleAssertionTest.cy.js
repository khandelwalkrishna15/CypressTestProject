
describe('Test Suite', ()=>{

    it('BstackDemo successful login', {browser : 'chrome'}, ()=>{
        cy.visit('/');
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.contains('button', 'Login').click();
        
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
        cy.contains("PIM").click();
        cy.wait(2000)
       // cy.get(':contains("Records Found")').should('be.visible').and('contain','109')


        cy.url().then(value =>{
            expect(value).contain('orange')
        })


        const navlinks = ["Configuration","Employee List","","Add Employee" ,"Reports"]
        cy.get('.oxd-topbar-body-nav-tab-item').should('have.length','4').each((item,index, list) =>{
            expect(item.text().trim()).to.eq(navlinks[index])
            cy.log(item.text())
        })

       

        })

       
});