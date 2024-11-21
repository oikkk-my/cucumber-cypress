import { Then } from "cypress-cucumber-preprocessor/steps";

Then("click on {string}", (xpath)=>{
    cy.get(xpath).click()
})
