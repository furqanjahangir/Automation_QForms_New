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
 it('Date Format - MM/DD/YYYY',()=>
{
call.login();
cy.get(locators.createform).click()   //locating create form on page and clicking on it
cy.wait(6000)                         
                     
cy.get(locators.formbuilder).click()             //on select template look for form builder locator


cy.get(locators.add_new_layout).click()    //Opens layout Popup
cy.get(locators.two_column_section).click() //Selects 2 Column Section/Layout

cy.get(locators.plusicon).click()  //Opens Form Elements
cy.get(locators.form_control).click()  //Opens Form Control section

cy.get(locators.date).drag(locators.two_column_section_row1) //Drags Text Control to Canvas
cy.get(locators.number).drag(locators.two_column_section_row2) //Drags Number Control to Canvas





// cy.get(locators.plusicon).click()
// cy.get(locators.form_control).click()
// cy.get(locators.date).click()
// cy.get(locators.text).click()
// cy.get(locators.text).click()
// cy.get(locators.text).click()

cy.get(locators.form_properties_icon).click()                     //click on Form Properties icon
cy.contains('Form Name') 
cy.get(locators.date_format).select('MM/DD/YYYY')

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

       
       cy.get('.owldateinput').click() //Click on date control in Form Submission Mode


})

      

    
      
      
      


cy.get('.owl-dt-calendar-control-content > .owl-dt-control > .owl-dt-control-content').click()
cy.get('.owl-dt-year-2022 > .owl-dt-calendar-cell-content').click()
cy.get('.owl-dt-month-0 > .owl-dt-calendar-cell-content').click()
cy.get(':nth-child(5) > .owl-dt-day-4 > .owl-dt-calendar-cell-content').click()


 

cy.get(locators.form_submit).click()
cy.wait(5000)

 cy.visit("https://test.qforms.co/#/forms/owned")   //Lands to Form Manager
           cy.wait(5000)
          cy.get(':nth-child(1) > .cdk-column-entriesCount > :nth-child(2) > .show-cursor > .badge').click()  //Click on Form Entries Count for the Current Form in Form Manager.
           cy.wait(8000)
          cy.get('tr.ng-star-inserted > :nth-child(3)').should('have.text',"01-27-2022")  //ASSERTION to check if the Review - Edited entry has been saved.


})
}) 