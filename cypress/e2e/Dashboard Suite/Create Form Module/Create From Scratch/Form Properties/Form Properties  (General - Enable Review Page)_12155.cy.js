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
 it('Enable Page Review with Text Button and User Form Edit OFF',()=>
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
cy.get(locators.enable_page_review).click()
cy.get(locators.enable_page_review_page_title).click().type('Review Your Page')
cy.get(locators.enable_page_review_page_description).click().type('Review Page Description')
cy.get(locators.enable_page_review_allow_edits).click()  //Turning Off Allow User to Edit when Page Review is ON. By default its ON.
cy.get(locators.enable_page_review_button_style).select('Text Button')
cy.get(locators.enable_page_review_submit_buttontext).click().type('Final Submit')
cy.get(locators.enable_page_review_back_buttontext).click().type('Oops, want to correct a Mistake')
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
       cy.get('.mat-form-field-flex').click().type('Test')   //Form Control - Locator  (Text)
       
       cy.get(locators.enable_page_review_form_reviewbutton).click()
      
       cy.get('.user-guidelines').invoke('text').then((labelcontrol)=> {        //check whether the form has landed onto the intended page after the Save & Resume Later Email has been given.
    
         expect(labelcontrol.trim()).to.equal("Review Page Description")
        })

       cy.get(locators.enable_page_review_form_review_finalsubmit_button_editoff).click()

cy.wait(5000)

cy.get('.panel-body > div').invoke('text').then((labelcontrol)=> {        //check whether the form has landed onto the intended page after the Save & Resume Later Email has been given.
    
   expect(labelcontrol.trim()).to.equal("Your form has been submitted successfully")
   cy.wait(5000)

  })
  cy.visit("https://test.qforms.co/#/forms/owned")   //Lands to Form Manager
  cy.wait(5000)
  cy.get(':nth-child(1) > .cdk-column-entriesCount > :nth-child(2) > .show-cursor > .badge').click()  //Click on Form Entries Count for the Current Form in Form Manager.
  cy.wait(10000)
  cy.get('.e').should('have.text',"Test")  //ASSERTION to check if the Review - Edited entry has been saved.


  

  cy.log('Your reviewed form has been submitted!')



     })

   })





   it('Enable Page Review with Text Button and User Form Edit ON',()=>
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
   cy.get(locators.enable_page_review).click()   //Enable Page Review
   cy.get(locators.enable_page_review_page_title).click().type('Review Your Page')
   cy.get(locators.enable_page_review_page_description).click().type('Review Page Description')
   
   cy.get(locators.enable_page_review_button_style).select('Text Button')   //Review Button Style = Text Button
   cy.get(locators.enable_page_review_submit_buttontext).click().type('Final Submit')
   cy.get(locators.enable_page_review_back_buttontext).click().type('Go Back')
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
          cy.get('.mat-form-field-flex').click().type('Input BEFORE Reviewing')   //Form Control - Locator  (Text) input Type Before Reviewing
          
         
          cy.get(locators.enable_page_review_form_reviewbutton).click()
          cy.wait(5000)
          cy.get('.elementdata').should('have.text',"Input BEFORE Reviewing")

          cy.get(locators.enable_page_review_form_review_back_textbutton).click()

          cy.wait(5000)
          cy.get('.mat-form-field-flex').click().clear().type('Input AFTER Reviewing')   //Form Control - Locator  (Text) input Type After Reviewing
          cy.get(locators.enable_page_review_form_reviewbutton).click()
          cy.wait(5000)
          cy.get('.elementdata').should('have.text',"Input AFTER Reviewing")  //ASSERTION to check the Text Field Edited Value after Editing it.
          cy.get(locators.enable_page_review_form_review_finalsubmit_textbutton_editon).click()
          cy.wait(5000)
          cy.get('.panel-body > div').should('have.text',"Your form has been submitted successfully") //ASSERTION to check if the form has been successfully submitted.
          cy.visit("https://test.qforms.co/#/forms/owned")   //Lands to Form Manager
          cy.wait(5000)
          cy.get(':nth-child(1) > .cdk-column-entriesCount > :nth-child(2) > .show-cursor > .badge').click()  //Click on Form Entries Count for the Current Form in Form Manager.
          cy.wait(8000)
          cy.get('.n').should('have.text',"Input AFTER Reviewing")  //ASSERTION to check if the Review - Edited entry has been saved.
          
          cy.log('Your Review Edited form has been submitted!')
   
   
   
        })
   
      })





     
      
         it('Enable Page Review with Image Button and User Form Edit ON',()=>
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
         cy.get(locators.enable_page_review).click()   //Enable Page Review
         cy.get(locators.enable_page_review_page_title).click().type('Review Your Page')
         cy.get(locators.enable_page_review_page_description).click().type('Review Page Description')
         
         cy.get(locators.enable_page_review_button_style).select('Image Button')   //Review Button Style = Image Button
         cy.get(locators.enable_page_review_submit_buttontext).click().type('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7O94cfcc9oOqpmmqQgTKAfcX6-i0HUyMU7Q&usqp=CAU')
         cy.get(locators.enable_page_review_back_buttontext).click().type('https://static.thenounproject.com/png/1991936-200.png')
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
                cy.get('.mat-form-field-flex').click().type('Input BEFORE Reviewing')   //Form Control - Locator  (Text) input Type Before Reviewing
                
               
                cy.get(locators.enable_page_review_form_reviewbutton).click()
                cy.wait(5000)
                cy.get('.elementdata').should('have.text',"Input BEFORE Reviewing")
                cy.wait(5000)
                cy.get(locators.enable_page_review_form_review_back_imagebutton).click()
      
                cy.wait(5000)
                cy.get('.mat-form-field-flex').click().clear().type('Input AFTER Reviewing')   //Form Control - Locator  (Text) input Type After Reviewing
                cy.get(locators.enable_page_review_form_reviewbutton).click()
                cy.wait(5000)
                cy.get('.elementdata').should('have.text',"Input AFTER Reviewing")  //ASSERTION to check the Text Field Edited Value after Editing it.
                cy.get(locators.enable_page_review_form_review_finalsubmit_imagebutton_editon).click()
                cy.wait(5000)
                cy.get('.panel-body > div').should('have.text',"Your form has been submitted successfully") //ASSERTION to check if the form has been successfully submitted.
                cy.visit("https://test.qforms.co/#/forms/owned")   //Lands to Form Manager
                cy.wait(5000)
                cy.get(':nth-child(1) > .cdk-column-entriesCount > :nth-child(2) > .show-cursor > .badge').click()  //Click on Form Entries Count for the Current Form in Form Manager.
                cy.wait(10000)
                cy.get('.n').should('have.text',"Input AFTER Reviewing")  //ASSERTION to check if the Review - Edited entry has been saved.
                
                cy.log('Your Review Edited form has been submitted!')
         
         
         
              })
         
            })
      




})