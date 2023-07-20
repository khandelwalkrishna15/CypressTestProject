// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';

//Login Custom Command
Cypress.Commands.add('loginOrangeCRM', (username, password) => {
        cy.get("input[name='username']").type(username)
        cy.get("input[name='password']").type(password)
        cy.contains('button', 'Login').click()
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })
    
// this command is to get the file name from the file path
Cypress.Commands.add('getFileNameFromPath', (filePath) => {
    const fileName = filePath.split('/').pop();
    return fileName;
    });
Cypress.Commands.add('getCurrentDate',()=> {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}_${month}_${day}`;
      }
)
         

