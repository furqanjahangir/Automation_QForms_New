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

      it('Save & Resume Later with System Users OFF',()=>
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

cy.get(locators.enable_save_resume_later).click()
cy.get(locators.enable_save_resume_later_emailsubject).click().clear().type('You can Resume your Incomplete Form')
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
       cy.get('#mat-input-4').click().type('Test')   //Form Control - Locator  (Text)
       cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('5800') //Form Control Locator (Number)
       cy.get(locators.enable_save_resume_later_formsubmit).click()
       cy.get(locators.enable_save_resume_later_onform_emaillink).click().type('furqan.jehangir@gmail.com')
       cy.get(locators.enable_save_resume_later_onform_submit_email).click()
       
       cy.wait(4000)

       cy.get('p > b').invoke('text').then((labelcontrol)=> {        //check whether the form has landed onto the intended page after the Save & Resume Later Email has been given.
    
        expect(labelcontrol.trim()).to.equal("Your form has been saved successfully")
       })

       cy.log('Email has been sent to the given Email. You can resume later from the link provided in the email')

       

     
      })
    })


      it('Save & Resume Later with System Users ON',()=>
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

cy.get(locators.enable_save_resume_later).click()
cy.get(locators.enable_save_resume_later_showsytemusers).click()
cy.get(locators.enable_save_resume_later_emailsubject).click().clear().type('You can Resume your Incomplete Form')

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
       cy.get('#mat-input-4').click().type('Test')   //Form Control - Locator  (Text)
       cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click().type('5800') //Form Control Locator (Number)
       cy.get(locators.enable_save_resume_later_formsubmit).click()
       cy.get(locators.enable_save_resume_later_onform_emaillink).click().type('furqan')
       cy.get('#mat-option-9 > .mat-option-text').click() //clicks on the desired email option we get after entering 'furqan' in email box 
       cy.get(locators.enable_save_resume_later_onform_submit_email).click()
       
       cy.wait(4000)

       cy.get('p > b').invoke('text').then((labelcontrol)=> {        //check whether the form has landed onto the intended page after the Save & Resume Later Email has been given.
    
        expect(labelcontrol.trim()).to.equal("Your form has been saved successfully")
       })

       cy.log('Email has been sent to the given Email. You can resume later from the link provided in the email')

       
     })
     






      
     
    
    })


   



     
    








})
