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
 it('Form Type - Generic',()=>
{
call.login();
cy.get(locators.createform).click()   
cy.wait(6000)                         //locating create form on page and clicking on it

                      
cy.get(locators.formbuilder).should('be.visible').click()             //on select template look for form builder locator
cy.get(locators.dragyouroption).should('be.visible')              //label drag your first element should be visible
cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there

cy.get(locators.form_type_dropdown).select('Generic')
cy.wait(6000)
cy.get(locators.url_redirection).should('be.visible')
cy.get(locators.enable_save_resume_later).should('be.visible')
cy.get(locators.enable_page_review).should('be.visible')
cy.get(locators.limit_one_entry_per_ip).should('be.visible')
cy.get(locators.limit_entries).should('be.visible')
cy.get(locators.enable_automatic_scheduling).should('be.visible')
cy.get(locators.date_format).should('be.visible')

   })


   it('Form Type - Survey',()=>
   {
   call.login();
   cy.get(locators.createform).click()   
   cy.wait(6000)                         //locating create form on page and clicking on it
                       
   cy.get(locators.formbuilder).should('be.visible').click()             //on select template look for form builder locator
   cy.get(locators.dragyouroption).should('be.visible')              //label drag your first element should be visible
   cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
   cy.contains('Form Name')                                 //check label Form Properties is there
   cy.get(locators.form_type_dropdown).select('Survey')
   cy.wait(5000)
   cy.get(locators.url_redirection).should('be.visible')
   cy.get(locators.enable_save_resume_later).should('be.visible')
   cy.get(locators.enable_page_review).should('be.visible')
   cy.get(locators.limit_one_entry_per_ip).should('be.visible')
   cy.get(locators.limit_entries).should('be.visible')
   cy.get(locators.enable_automatic_scheduling).should('be.visible')
   cy.get(locators.date_format).should('be.visible')
   
      })   

      it('Form Type - Questionnaire',()=>
      {
      call.login();
      cy.get(locators.createform).click()    //locating create form on page and clicking on it
                         
      cy.wait(6000)                        
      cy.get(locators.formbuilder).should('be.visible').click()             //on select template look for form builder locator
      cy.get(locators.dragyouroption).should('be.visible')              //label drag your first element should be visible
      cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
      cy.contains('Form Name')                                 //check label Form Properties is there
      
      cy.get(locators.form_type_dropdown).select('Questionare')
      cy.wait(6000)
      cy.get(locators.enable_negative_marking).should('be.visible')
      cy.get(locators.show_timer).should('be.visible')
      cy.get(locators.url_redirection_questionnaire).should('be.visible')
      cy.get(locators.enable_page_review).should('be.visible')
      cy.get(locators.limit_one_entry_per_ip).should('be.visible')
      cy.get(locators.limit_entries).should('be.visible')
      cy.get(locators.enable_automatic_scheduling).should('be.visible')
      cy.get('#accordionProperties').scrollTo('bottom')
      cy.get(locators.date_format_questionnaire).should('be.visible')
      
         })

})
