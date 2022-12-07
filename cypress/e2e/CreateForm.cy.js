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
cy.get(locators.createform).click()                            //locating create form on page and clicking on it
cy.get(locators.textcreateform).should('have.text',"Create a Form")
cy.get(locators.text2createform).should('have.text',"Create an amazing form to collect data easily.")  //look for label                         
cy.get(locators.formbuilder).should('be.visible').click()             //on select template look for form builder locator
cy.get(locators.dragyouroption).should('be.visible')              //label drag your first element should be visible
cy.get(locators.plusicon).click()                           //click on plus icon
cy.contains('Form Elements')                                 //check label Form element is there
cy.get(locators.control).invoke('text').then((labelcontrol)=>{        //check whether label control  is there or not    
  expect(labelcontrol.trim()).to.equal("Controls")
})
cy.get(locators.typography).invoke('text').then((labeltypography)=>{    //check for label typography is there or not
  expect(labeltypography.trim()).to.equal("Typography")
})

   })

})