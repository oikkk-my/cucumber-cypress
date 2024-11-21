import { When } from "cypress-cucumber-preprocessor/steps"; 

When("check title", ()=>{
    cy.title().should('eq', 'Welcom')
})