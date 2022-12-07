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

it.only('drag and drop',()=>{
    call.login();
cy.get(locators.createform).click()  
cy.wait(3000)                          //locating create form on page and clicking on it
cy.get(locators.formbuilder).should('be.visible').click() 
cy.wait(3000)            //on select template look for form builder locator
cy.get(locators.plusicon).click()



cy.get(locators.twocolumntext).drag(locators.canvas)
cy.get(locators.twocolumntext).click()

cy.wait(3000)
//cy.contains('Form Elements').scrollto('bottom')







//cy.get(#imagelefttext>col-md-10).drag(locators.canvas)
//cy.scrollTo(0, 500) // Scroll the window 500px down
//cy.get('').scrollTo('bottom') // Scroll 'sidebar' to its bottom



//cy.get('#twocolumntext > .col-md-10').drag(locators.canvas)
//cy.get('#orderedlist > .col-md-10').drag(locators.canvas)
//cy.scrollTo('bottom')

}) 
})