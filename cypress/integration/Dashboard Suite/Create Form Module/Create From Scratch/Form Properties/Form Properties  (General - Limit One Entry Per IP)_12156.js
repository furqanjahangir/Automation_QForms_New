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
 it('Limit Form Entries Per IP',()=>
{
call.login();
cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.plusicon).click()
cy.get(locators.form_control).click()
cy.get(locators.text).click()



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there
cy.get(locators.limit_one_entry_per_ip).click()
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
       cy.get('.mat-form-field-flex').click().type('Test Limit One Entry Per IP')   //Form Control - Locator  (Text)
        cy.get(locators.form_submit).click()
        cy.wait(5000)


     })
     cy.get('.panel-body').invoke('text').then((labelcontrol)=> {        //ASSERTION to check whether the form has landed onto the page which tells "Your form has been submitted successfully."
    
        expect(labelcontrol.trim()).to.equal("Your form has been submitted successfully")
        cy.wait(5000)
     
       })
       cy.visit("https://test.qforms.co/#/forms/owned")   //Lands to Form Manager Page
       cy.wait(5000)


       cy.get(locators.topmost_form + '> a')    //function to extract URL from the Topmost Form in Form Manager in order to open it in the same FRAME.
       .should('have.attr', 'href')                // And to Open the same Form again for New Entry.
       .then((href) => {

        cy.visit(href)
        cy.wait(5000)
        cy.get('.mat-form-field-flex').click().type('Test Limit One Entry Per IP')   //Form Control - Locator  (Text)
        cy.get(locators.form_submit).click()
        cy.wait(5000)

        cy.get('.panel-body').invoke('text').then((labelcontrol)=> {        //ASSERTION to check whether the form has landed onto the page which tells "No more entries are allowed from your system." can be made.
    
            expect(labelcontrol.trim()).to.equal("No more entries are allowed from your system.")
            cy.wait(5000)
         
           })


cy.log('Limit One Entry Per IP Test Passed Successfully!')
     
})




})
})