/*
 *This Page class included elements of Login page and the fucntions on those elements 
 * 
 */
class LoginPage {


  element = {
    inpUserName: () => cy.get("input[name='username']"),
    inpPassword: () => cy.get("input[name='password']"),
    btnLogin: () => cy.contains('button', 'Login')
  }


  /*function to login into application 
  * @param 'username' and 'password' string
  */

  loginToApplication(username, password) {
    this.inpUserName().type(username)
    this.inpPassword().type(password)
    this.btnLogin().click()

  }

  /*function to login into application 
  * @param 'testData' data object
  */

  loginToApplicationJson(testData) {
    this.element.inpUserName().type(testData.username)
    this.element.inpPassword().type(testData.password)
    this.element.btnLogin().click()

  }


}
export default LoginPage