///<reference types="cypress" />


import { locators } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/locator"
import { data, text} from  "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/function"
import { userdata } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/userData"
import { links } from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/link"
import { result } from "lodash"
import {labels} from "/Users/furqanjehangir/QForms/Automation_Qforms/cypress/Pages/label"

const call =new text()

// let link='https://test.qforms.co'
// let exdboardlink=links.exdashboardlink
// let exlink=links.expectedlink

       it.only('QformsLogin', () =>{        
       call.login();                               //logging q forms by calling log in function which contains its URL and credentials        
       cy.url().should('include',links.exdashboardlink) 
       cy.log("you have entered qforms log in page")
       cy.url().should('eq',links.exdashboardlink)         //asserting dashboard url once we logged in 
       cy.screenshot()

       })
    