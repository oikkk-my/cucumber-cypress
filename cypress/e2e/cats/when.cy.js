import { When } from "cypress-cucumber-preprocessor/steps";

When("I type {string} on {string}", (input, path)=>{
    cy.xpath(path).type(input)
})

When("I hit esc", ()=>{
    cy.realPress('Escape')
})

When("I click on {string}", (path)=>{
    cy.xpath(path).click()
})