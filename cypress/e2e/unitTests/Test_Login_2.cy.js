
import LoginPage from "./Pages/LoginPage";
import DashBoardPage from "./Pages/DashBoardPage";

describe('Test Suite', ()=>{
    const  login = new LoginPage();
    const dashBoard = new DashBoardPage();

    
    it.only('Invalid Login Tests', {browser : 'chrome'}, ()=>{

      cy.fixture("testdata").as("userLogindata")
       cy.get("@userLogindata").then((user)=>{
        
          user.forEach(data => {
            cy.visit('/')
            login.loginToApplication(data.username, data.password)
            dashBoard.element_pageHeading().should('have.text',data.expected)
            cy.wait(5000)
            dashBoard.logoutMethod()
            cy.wait(5000)
          });
           })    
        
        })


        
});