
describe('Test Suite', ()=>{

    it('BstackDemo successful login', {browser : 'chrome'}, ()=>{
        cy.visit('/');
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.contains('button', 'Login').click();
        cy.contains("PIM").click();
        cy.wait(1000)
        cy.get('.oxd-table-row.oxd-table-row--with-border.oxd-table-row--clickable').find('.oxd-checkbox-input').eq(1).click({force:true});
        cy.get('.oxd-table-row.oxd-table-row--clickable>div>div').filter(':contains("David")').parents('.oxd-table-row--clickable').find('.oxd-checkbox-input').click({force:true});
        cy.get('.oxd-table-row.oxd-table-row--clickable>div>div').filter(':contains("Smith")').parents('.oxd-table-row--clickable').find('.oxd-checkbox-input').as('employee')
        cy.get('@employee').eq(0).click({force:true});
        
        cy.get('.oxd-topbar-body-nav-tab-item').as('list')
        cy.get('@list').eq(0).then(label =>{
            cy.log(label.text())
            cy.wrap(label).click();
            
        })

        cy.get('.oxd-topbar-body-nav-tab-item').as('list')
        cy.get('@list').eq(3).invoke('text').then(text =>{
            cy.log(`Printing loging text ${text}`)
            
            
        })

        console.log("This is Java script command")

        })

       
});