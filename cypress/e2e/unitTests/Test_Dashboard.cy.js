import DashBoardPage from "./Pages/DashBoardPage";

const dashboard = new DashBoardPage();

describe('Dahsboard', () => {  

    before('Launch the URL', function(){
        cy.visit('/')
    })

    it('Validate all the Quick Launch Texts on dashboard', function () {
        let countOfElements;
        cy.fixture('testdata').then(function (testdata) {
            cy.loginOrangeCRM(testdata.username, testdata.password)  //Login into the application
            dashboard.element_pageHeading().should('have.text',testdata.pagetitle)  //Validate the page header
            cy.wrap(testdata.quickLaunch).then($elements => {
                countOfElements = $elements.length; //get the size of data list
                dashboard.quickLaunchGrid().should('have.length',countOfElements).each(($item,index, list) =>{ //validate the count of link in the grid
                    expect($item.text().trim()).to.contain(testdata.quickLaunch[index]) //Validate the quickLaunch grid element count  
            })
                
        })
        
          })
    })
      

});
