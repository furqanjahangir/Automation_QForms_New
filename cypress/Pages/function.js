import {userdata} from './userData'
import { locators } from './locator';
import { links } from './link';
//import { should } from 'chai';

export class text{

    
    
    navigate(url){
        cy.visit(url)
      
        cy.wait(3000);
    }
    
    enterFirstName(){
        let firstName=userdata.fname;
        let fsel=locators.fNameSel;
        cy.get(fsel).type(firstName,{force:true})

    }
    login(){

        let url1=links.link1;
        this.navigate(url1) //sends url1 value to Navigate Function(url variable)
        this.validEmailAddress()
        this.password()
        
        this.onSubmit()
        cy.wait(4000)
       }
      
    enterLastName(){
        let lastName=userdata.lName;
        let lsel=locators.lNameSel;
        cy.get(lsel).type(lastName+this.generateString(5),{force:true})

    }
    enterStreetAddress(){
        let add=userdata.address;
        let location=locators.address;
        cy.get(location).type(add)

    }
   
   zipCode(){
    let code=userdata.pincode;
    let zcode=locators.addCode;

        cy.get(zcode).type(code+'{enter}')

    }
   phoneNumber(){
    let call=userdata.number;
    let phNo=locators.num;

        cy.get(phNo).type(call+Math.floor(Math.random()*100))

    }
    remailAddress(){
    let msg=userdata.mail;
    let msgMail=locators.email;

        cy.get(msgMail).type(msg+Math.floor(Math.random()*100)+'@mail.com')
    
    }
    invalidpassword(){
        
    }
    validEmailAddress(){
        let email=userdata.validemail;
        let msgMail=locators.email;
        cy.get(msgMail).type(email)
    }
    forgetpassword(){
        let forgetemail=userdata.femail;
        let forgetpasswordlocator =locators.forgetpswd;
        cy.get(forgetpasswordlocator).type(forgetemail);
    }
    forgetpassword_Unreg(){
        let forgetUnregisteredemail=userdata.unregisteredEmail;
        let forgetpasswordlocator =locators.forgetpswd;
        cy.get(forgetpasswordlocator).type(forgetUnregisteredemail);
    }
    password(){
        let pswd=locators.password;
        let pswdvalue=userdata.password;
        cy.get(pswd).type(pswdvalue)
    }
   errormessage(){
        let erormsg=locators.errormessage;
        let erormsgvalue=userdata.errormessage;
        cy.get(erormsg).contains(erormsgvalue)
    }
    
    refferedBy(){
    let details=userdata.ref;
        let refText=locators.ref;
        cy.get(refText).type(details)

    }
    onSubmit(){
    let LogIn=locators.login;
    cy.get(LogIn).click();
        
    }
    loggingOut(){
        let userD=locators.userdemo //looking for userdemo and click on it
        let loggOut=locators.logout
        cy.get(userD).click()
        cy.get(loggOut).click()
       }
       
    generateString(length) {
       
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
        
        
    }
}