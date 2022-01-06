///<reference types="cypress" />


import { locators } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/locator"
import { data, text} from  "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/function"
import { userdata } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/userData"
import { links } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/link"
import { result } from "lodash"
import {labels} from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/label"

const call =new text()
let url=links.link1
let exlink=links.expectedlink
let exdboardlink=links.exdashboardlink


describe('Test',()=>                                      //testsuite
{
   afterEach(function(){
      if (this.currentTest.state === 'failed')           //any test case failed cypress will stop
        {
        Cypress.runner.stop()
        }
      });

      it('URL Redirection with Confirmation Dialog Box ON',()=>
{
call.login();
cy.get(locators.createform).click()  //locating create form on page and clicking on it 
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.plusicon).click()
cy.get(locators.form_control).click()
cy.get(locators.text).click()
cy.get(locators.number).click()



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there

cy.get(locators.url_redirection).click()
cy.get(locators.redirect_url).click().type(links.redirecturl)
cy.get(locators.redirect_message).click().type('You are being redirected to Create Form Tab')


cy.get(locators.save_close_form).click()
cy.wait(6000)


cy.get(locators.topmost_form).click()
cy.get(locators.form_publish).click()
cy.wait(7000)



cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
     .should('have.attr', 'href')
     .then((href) => {

      cy.visit(href)
       cy.wait(5000)

       cy.get(locators.form_submit).click()
       cy.wait(4000)

       cy.get(locators.form_redirect_confirm_ok).click()

       cy.url().should('eq',links.redirecturl)  //*Assertion to check if the Form got redirected to the already set Redirection URL.
       cy.log('Form has been Redirected Successfully!')
       cy.wait(5000)
     
      })
     
    
    })


      it('URL Redirection without Prompting',()=>
{
call.login();
cy.get(locators.createform).click()  //locating create form on page and clicking on it 
cy.wait(6000)                         
                    
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.plusicon).click()
cy.get(locators.form_control).click()
cy.get(locators.text).click()
cy.get(locators.number).click()



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there

cy.get(locators.url_redirection).click()
cy.get(locators.redirect_without_prompt).click()
cy.get(locators.redirect_url).click().type('https://test.qforms.co/#/qforms/select-template')


cy.get(locators.save_close_form).click()
cy.wait(6000)


cy.get(locators.topmost_form).click()
cy.get(locators.form_publish).click()
cy.wait(7000)



cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
     .should('have.attr', 'href')
     .then((href) => {

      cy.visit(href)
       cy.wait(5000)

       cy.get(locators.form_submit).click()
       cy.wait(4000)


       cy.url().should('eq','https://test.qforms.co/#/qforms/select-template') //*Assertion to check if the Form got redirected to the already set Redirection URL.
       cy.wait(5000)
       cy.log('Form has been Redirected Successfully!')

     
      })
     
    








})
})