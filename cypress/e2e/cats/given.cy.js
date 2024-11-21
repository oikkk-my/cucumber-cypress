import { Given } from "cypress-cucumber-preprocessor/steps";

Given("I launch website {string}", (website)=>{
    cy.visit(website)
})