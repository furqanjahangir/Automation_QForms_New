///<reference types="cypress" />


import { locators } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/locator"
import { data, text} from  "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/function"
import { userdata } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/userData"
import { links } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/link"
import { result } from "lodash"
import {labels} from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/label"


const call =new text()

let link='https://test.qforms.co'
let url=links.link1

it('forgetPassword',()=>
{
   call.navigate(url);
   cy.get(locators.forgetlink).click()                         //forgt link click
   call.forgetpassword_Unreg()
   cy.get(locators.sendemail).click()                           //click on send email
   cy.get(locators.errormessage).invoke('text').then((labeleror)=>{   //assert label "error" whether its there or not
      expect(labeleror.trim()).to.equal("Error")
   })
   cy.screenshot()
  
})