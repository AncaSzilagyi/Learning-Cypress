// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('checkbox_class_assert', (label_name, status) => {
    var xpath_name = "//span[contains(text(),'" + label_name + "')]/../span[1]/*[local-name()='svg']";
    var class_name = 'rct-icon rct-icon-' + status;
    cy.xpath(xpath_name).should('have.class', class_name);
})

Cypress.Commands.add('assert_paragraph_contains', (id_name, text) => {
    var xpath_by_id = "//p[@id='"+id_name+"']/text()[2]";
    cy.xpath(xpath_by_id).should("have.text", text);
})

Cypress.Commands.add('radio_assert_option', (option) => {
    var xpath_option = "//p[@class='mt-3']/span";
    cy.xpath(xpath_option).should("have.text", option);
})

// Cypress.Commands.add('check_table_field_value', (field_column_no, value) => {
//     var xpath_field = "//div[@class='rt-tr -odd']/div["+field_column_no+"]";
//     cy.xpath(xpath_field).should('have.text', value);
// })
// I want to create a function that is automatically checking the entire row from the table. Work in progres...