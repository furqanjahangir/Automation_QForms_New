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
 it('Enable Password Protection - Right Password',()=>
{
call.login();
cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator

cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.two_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.text).drag(locators.two_column_section_row1) //Drags Text Control to Canvas
cy.get(locators.number).drag(locators.two_column_section_row2) //Drags Number Control to Canvas



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name') 
cy.get(locators.form_security_header).click()
cy.get(locators.enable_password_protection).click()
cy.get('.ng-star-inserted > .form-control').click().type('12345')


 cy.get(locators.save_close_form).click()
cy.wait(7000)
   
   
   
   
cy.get(locators.topmost_form).click()
cy.get(locators.form_publish).click()
cy.wait(7000)



cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
     .should('have.attr', 'href')
     .then((href) => {

      cy.visit(href)


       cy.wait(10000)

       cy.get('.form-control').click().type('12345')
       cy.get('.btn').click()


})
cy.contains('Text')
cy.contains('Submit')
cy.log('Form Opened Successfully with the Right Password!') 

    
})


it.only('Enable Password Protection - Wrong Password',()=>
{
call.login();
cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.two_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.text).drag(locators.two_column_section_row1) //Drags Text Control to Canvas
cy.get(locators.number).drag(locators.two_column_section_row2) //Drags Number Control to Canvas



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name') 
cy.get(locators.form_security_header).click()
cy.get(locators.enable_password_protection).click()
cy.get('.ng-star-inserted > .form-control').click().type('12345')


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

       cy.get('.form-control').click().type('123456') // Here we are giving the Wrong Password. Right one is '12345'
       cy.get('.btn').click()

       
})
cy.get('.toast-title').invoke('text').then((labelcontrol)=> {        //check whether the form has landed onto the intended page after the Save & Resume Later Email has been given.
    
  expect(labelcontrol.trim()).to.equal("Error!")
 })

 cy.get('.toast-message').invoke('text').then((labelcontrol)=> {        //check whether the form has landed onto the intended page after the Save & Resume Later Email has been given.
    
  expect(labelcontrol.trim()).to.equal("Invalid Password!")
 })


cy.log('Form didnt Open with the Wrong Password!') 



})
}) 