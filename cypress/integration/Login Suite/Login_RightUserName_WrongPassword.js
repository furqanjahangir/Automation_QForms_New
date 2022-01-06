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
  it('invalidPassword',()=>{                                           //typing invalid password
        call.navigate(url);
        call.validEmailAddress();
        let result1="result"
        let rpassword=call.generateString(8);                               //calling function in which we are randomly generating password
        cy.get(locators.password).type(rpassword)
        call.onSubmit();
        cy.url().should('include', exlink)
        call.errormessage()                                              //capturing error message which we get once we try to log in using invalid password/email
        cy.log("log in failed")                                          //message
        cy.screenshot()
     }) 