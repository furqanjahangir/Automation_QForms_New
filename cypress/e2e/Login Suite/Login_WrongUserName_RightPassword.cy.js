
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

it.only('InvaLidEmail',()=>{                           //randomly generated email is given thus incorrect email id
    call.navigate(url);                        //navigating q forms URL
    call.remailAddress();                     //calling function which generates random email address 
    call.password();                          //correct password
    call.onSubmit();
    cy.url().should('include', exlink)       //asserting url as it will still contain url where we enter credentials 
    call.errormessage()                      //capturing error message which we get once we try to log in using invalid password/email
    cy.log("log in failed")                  //we are giving message that our test case has passed as our log in is failed
    cy.screenshot()
})