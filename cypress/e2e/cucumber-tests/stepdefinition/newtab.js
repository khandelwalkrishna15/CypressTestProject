import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('open the application', () => {
  cy.visit(Cypress.env('tab_test_url'))
});


When('I remove the \'target\' attribute from tab link and click the tab link', () => {
  cy.get('#opentab').invoke('removeAttr', 'target').click() //by removing the attribute 'target'
});

Then('new tab should be successfully opened', () => {
  cy.url().should('include', Cypress.env('new_Window_Test_Url'))
});

Then('the new tab header should be {string}', (heading) => {
  cy.xpath('//h1').should('have.text', heading);
  cy.wait(200);
});

//
When('I get the url and visit the new tab url', () => {
  cy.get('#opentab').then(newtab => {
    const hrefTab = newtab.prop('href')
    cy.visit(hrefTab);
  });
});

Then('I should be on the new window with URL new_Window_Test_Url', () => {
  cy.url().should('include', Cypress.env('new_Window_Test_Url'));
});


Then('I go back to {string}', (page_name) => {
  cy.go('back');
  cy.get('h1').should('have.text', page_name)
});


Given('I visit the tab_test_url', () => {
  cy.visit(Cypress.env('tab_test_url'));
});


Then('the new window header should be {string}', (heading) => {
  cy.xpath('//h1').should('have.text', heading);
});

// Go back to previous tab or screen
Then('I go back', () => {
  cy.go('back');
});


When('I intercept the window.open function', () => {
  cy.window().then((win) => {         //retrieves the browser's window object

    win.open = () => { // override the open method of the window object
      win.location.href = Cypress.env('new_Window_Test_Url');

    };
  });
});


When('I click on the element to open new window', () => {
  cy.get('#openwindow').click()
});

