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
 it('Hide Question Labels',()=>
{
  
call.login();
cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(10000)                         
                     
cy.get(locators.formbuilder).click() //on select template look for form builder locator


cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.single_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.group_control).drag(locators.single_column_section_row) //Drags Text Control to Canvas



cy.get('.page-container-warapper').should('contain.text','Group Controls') //Assertion : Label Text is Visible in Form Design Mode

cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name') 


cy.get(locators.form_style_header).click()
cy.get(locators.hide_question_labels).click()

cy.get('.page-container-warapper').should('not.contain.text','Group Controls')  //Assertion : Label Text is Hidden in Form Design Mode

cy.wait(5000)

 cy.get(locators.save_close_form).click()
 cy.wait(7000)
   
   
   
   
cy.get(locators.topmost_form).click()
cy.get(locators.form_publish).click()
cy.wait(7000)



cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
     .should('have.attr', 'href')
     .then((href) => {

      cy.visit(href)


       cy.wait(5000)




 })
 cy.get('.form-horizontal').should('not.contain.text','Group Controls') //Assertion : Label Text is Hidden in Form View Mode

 cy.log('Form Opened Successfully without Label!') 

    
})
})