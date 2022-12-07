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
      


    it('QformsLogindashboard', () =>{         //will land on dashboard once logged in
      call.login();
      cy.url().should('include', exlink)      
      cy.log("successfully logged in")
      cy.url().should('eq',exdboardlink )      //asserting whether we are on dashboard
      cy.get(locators.userdemo).should('have.text',userdata.checkuserdemo)   //does it have specific account name
      cy.screenshot()
      cy.get(locators.navigation).should('be.visible')                      //whether navigation bar is there
      cy.get(locators.viewform).should('have.text',labels.viewformslist)    //checking label "view form" is there or not
      cy.screenshot()
      cy.get(locators.createform).invoke('text').then((labelcreateform)=>{   //assert label "create form" whether its there or not
         expect(labelcreateform.trim()).to.equal("Create Forms")
      })
      cy.screenshot()
      cy.get(locators.viewusrrole).invoke('text').then((labelviewurole)=>{  //assert label "view user role list"
         expect(labelviewurole.trim()).to.equal("View User Role List")
      })
      cy.screenshot()
      cy.contains(labels.dueamount)                                             //checking label due amount is there or not
      call.loggingOut()                                            //logging out
      
   })   

    
     
      it('form manager',()=>
      {
      call.login()
      cy.get(locators.viewform).click()                                  //locating viewform on page and clicking on it
      cy.get(locators.formmanage).contains(' Form Manager ')             //whether form manager is written
      cy.screenshot()
      cy.get(locators.backbutton).click()                                //clicking back button
      cy.get(locators.viewform).should('have.text',"View Forms List")   //checking label
   })
      it('create form',()=>
      {
      call.login();
      cy.get(locators.createform).click()                            //locating create form on page and clicking on it
      cy.get(locators.textcreateform).should('have.text',"Create a Form")
      cy.get(locators.text2createform).should('have.text',"Create an amazing form to collect data easily.")  //look for label                         
      cy.get(locators.formbuilder).should('be.visible')              //on select template look for form builder locator
      cy.screenshot()
      cy.get(locators.uploadpf).should('be.visible')                 //look for upload pdf
      cy.screenshot()
      call.loggingOut()
   })
      it('viewuserrole',()=>
      {
      call.login()
      cy.get(locators.viewusrrole).click()
      cy.get(locators.rolelist).should('have.text'," Role List ")   //checking label "Role list " is there
      cy.screenshot()
      cy.get(locators.newrole).should('be.visible')             //checking label new role
      cy.screenshot()
   })
      it('users',()=>
      {
       call.login()
       cy.get(locators.userlist).click()
       cy.get(locators.createnewuser).should('be.visible')              // button labelled "create new user" should be there
       cy.get(locators.userlistlabel).invoke('text').then((labeluser)=>{
       expect(labeluser.trim()).to.equal("User List")                   //checking label user list
            })
            cy.screenshot()
         })
      it.only('billingninvoice',()=>
      {
       call.login()
       cy.get(locators.billing).click()
       cy.get(locators.clientid).invoke('text').then((textOfElement)=>{
       expect(textOfElement.trim()).to.equal("CLIENT ID")                //checking label client id
       cy.screenshot()
       cy.contains('Invoice Number')
          })
      })
   })
