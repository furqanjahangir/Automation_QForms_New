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
 it('create form',()=>
{
call.login();
cy.get(locators.createform).click()   
cy.wait(8000)                         //locating create form on page and clicking on it
                    
cy.get(locators.formbuilder).should('be.visible').click()             //on select template look for form builder locator
cy.get(locators.dragyouroption).should('be.visible')              //label drag your first element should be visible

cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.two_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.text).drag(locators.two_column_section_row1) //Drags Text Control to Canvas
cy.get(locators.number).drag(locators.two_column_section_row2) //Drags Number Control to Canvas


cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('General')                                 //check label Form Properties is there
cy.get(locators.form_description).click().clear().type('This form is Auto-Generated for testing purpose only')
cy.get('.btn > .material-icons').click()
cy.get('.example-button-row > .mat-primary > .mat-button-wrapper').click()
cy.wait(7000)
cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon

cy.get(locators.form_description).should('have.value','This form is Auto-Generated for testing purpose only')






   })

})