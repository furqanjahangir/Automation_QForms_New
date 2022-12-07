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

      it.only('URL Redirection with Confirmation Dialog Box ON',()=>
{
call.login();
cy.get(locators.createform).click()  //locating create form on page and clicking on it 
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.dragyouroption).should('be.visible').wait(5000)              //label drag your first element should be visible

cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.two_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.text).drag(locators.two_column_section_row1) //Drags Text Control to Canvas
cy.get(locators.number).drag(locators.two_column_section_row2) //Drags Number Control to Canvas




cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there

cy.get(locators.url_redirection).click()
cy.get(locators.redirect_url).click().type('https://www.google.com/')
cy.get(locators.redirect_message).click().type('You are being redirected to Google Search')


cy.get(locators.save_close_form).click()
cy.wait(6000)


cy.get(locators.topmost_form).click()
cy.get(locators.form_publish).click()
cy.wait(7000)



cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
     .should('have.attr', 'href')
     .then((href) => {

      let HREF = "https://dev.qforms.co/"
      let formlink = HREF+href  
      cy.visit(formlink)
      
             cy.wait(5000)
      
             cy.get(locators.form_submit).click()
             cy.wait(4000)
      
      cy.get(locators.form_redirect_confirm_ok).click()
             cy.url().should('eq','https://www.google.com/') //*Assertion to check if the Form got redirected to the already set Redirection URL.
             cy.wait(5000)

    
            cy.log('Form has been Redirected Successfully!')
          
     
      })
     
    
    })


      it('URL Redirection without Prompting',()=>
{
call.login();
cy.get(locators.createform).click()  //locating create form on page and clicking on it 
cy.wait(6000)                         
                    
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.dragyouroption).should('be.visible').wait(5000)              //label drag your first element should be visible

cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.two_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.text).drag(locators.two_column_section_row1) //Drags Text Control to Canvas
cy.get(locators.number).drag(locators.two_column_section_row2) //Drags Number Control to Canvas



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there

cy.get(locators.url_redirection).click()
cy.get(locators.redirect_without_prompt).click()
cy.get(locators.redirect_url).click().type('https://www.google.com/')


cy.get(locators.save_close_form).click()
cy.wait(6000)


cy.get(locators.topmost_form).click()
cy.get(locators.form_publish).click()
cy.wait(7000)



cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
     .should('have.attr', 'href')
     .then((href) => {
let HREF = "https://dev.qforms.co/"
let formlink = HREF+href  
cy.visit(formlink)

       cy.wait(5000)

       cy.get(locators.form_submit).click()
       cy.wait(4000)


       cy.url().should('eq','https://www.google.com/') //*Assertion to check if the Form got redirected to the already set Redirection URL.
       cy.wait(5000)
       cy.log('Form has been Redirected Successfully!')

     
      })
     
    








})
})