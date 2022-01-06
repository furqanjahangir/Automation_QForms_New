///<reference types="cypress" />


import { locators } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/locator"
import { data, text} from  "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/function"
import { userdata } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/userData"
import { links } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/link"
import { result } from "lodash"
import {labels} from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/label"

const call =new text()
let url=links.link1

it('forgetPassword',()=>
{
   call.navigate(url);
   cy.get(locators.forgetlink).click()                         //forgt link click
   call.forgetpassword()
   cy.get(locators.sendemail).click()                           //click on send email
   cy.get(locators.successtoast).should('have.text'," Success ") //once email is send check message pop success is on screen
   cy.screenshot()
   cy.contains('Please check your inbox')                        //checking label
})