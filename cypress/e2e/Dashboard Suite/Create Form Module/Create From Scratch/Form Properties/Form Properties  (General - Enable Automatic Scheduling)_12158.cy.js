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

 it('Form Automatic Scheduling - Testing with Past Date (Form Should Not Be Available for Submission)',()=>
{

cy.log("HEY QA, YOU NEED TO ADD THE CURRENT TIME IN THE CODE TO SCHEDULE IT ACCORDING TO YOUR CHOICE. IT WONT WORK TILL THEN")
call.login();
cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.plusicon).click()
cy.get(locators.form_control).click()
cy.get(locators.text).click()



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there
cy.get(locators.enable_automatic_scheduling).click()
cy.get(locators.enable_automatic_scheduling_date_time).click()

cy.get(':nth-child(3) > .owl-dt-day-4 > .owl-dt-calendar-cell-content').click() // *Select the DATE (FROM) MANUALLY!*
cy.get('.owl-dt-calendar-control-content > .owl-dt-control > .owl-dt-control-content').click()
cy.get('.owl-dt-year-2036 > .owl-dt-calendar-cell-content').click()
cy.get('.owl-dt-month-0 > .owl-dt-calendar-cell-content').click()

cy.get(':nth-child(1) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('4') //Set Time (FROM)
cy.get(':nth-child(2) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('55') //Set Time (FROM)
cy.wait(4000)

cy.get(':nth-child(3) > .owl-dt-day-4 > .owl-dt-calendar-cell-content').click()  // *Select the DATE (TO) MANUALLY!*

cy.get(':nth-child(1) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('4')  //Set Time (TO)
cy.get(':nth-child(2) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('59') //Set Time (TO)


cy.get('.owl-dt-container-buttons > :nth-child(2) > .owl-dt-control-content').click() // Click on Set Button 

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
      //  cy.get('.mat-form-field-flex').click().type('Test Limit One Entry Per IP')   //Form Control - Locator  (Text)
      //   cy.get(locators.form_submit).click()
      //   cy.wait(5000)


     })
      cy.get('.panel-body').invoke('text').then((labelcontrol)=> {        //ASSERTION to check whether the form has landed onto the page which tells "Your form has been submitted successfully."
    
       expect(labelcontrol.trim()).to.equal("This form is currently closed for entries!")
        cy.wait(5000)
     
      })


cy.log('Form Automatic Scheduling - Testing with Far Future Date (Form Should Not Be Available for Submission) PASSED!')
     


    })


it.only('Form Automatic Scheduling - Testing with Present Date (Form Should Be Available for Submission)',()=>
{

cy.log("HEY QA, YOU NEED TO ADD THE CURRENT TIME IN THE CODE TO SCHEDULE IT ACCORDING TO YOUR CHOICE. IT WONT WORK TILL THEN")

call.login();

cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator
cy.get(locators.plusicon).click()
cy.get(locators.form_control).click()
cy.get(locators.text).click()



cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name')                                 //check label Form Properties is there
cy.get(locators.enable_automatic_scheduling).click()
cy.get(locators.enable_automatic_scheduling_date_time).click()
//cy.get(':nth-child(4) > .owl-dt-day-3 > .owl-dt-calendar-cell-content').click() // *Select the DATE (FROM) MANUALLY!*
// cy.get('.owl-dt-calendar-control-content > .owl-dt-control > .owl-dt-control-content').click()


// //cy.get('.owl-dt-year-2036 > .owl-dt-calendar-cell-content').click()
// //cy.get('.owl-dt-month-0 > .owl-dt-calendar-cell-content').click()


 cy.get(':nth-child(1) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('13') //Set Time (FROM)
 cy.get(':nth-child(2) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('55') //Set Time (FROM)
 cy.wait(4000)

 cy.get('.owl-dt-container-to > .owl-dt-control-content').click()  // *Select the DATE (TO) MANUALLY!*

 cy.get(':nth-child(1) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('21')  //Set Time (TO)
 cy.get(':nth-child(2) > .owl-dt-timer-content > .owl-dt-timer-input').clear().type('59') //Set Time (TO)




 cy.get('.owl-dt-container-buttons > :nth-child(2) > .owl-dt-control-content').click() // Click on Set Button 

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


cy.log('Form Automatic Scheduling - Testing with Present Date (Form Should Be Available for Submission) PASSED!')
     




    
})
})