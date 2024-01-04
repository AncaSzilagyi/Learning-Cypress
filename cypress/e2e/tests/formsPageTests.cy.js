
describe('Practice Form tests', () => {

    before('Go to Practice form page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Forms")]').click();
        cy.wait(500);
        cy.xpath("//span[contains(text(), 'Practice Form')]").click();
        cy.xpath("//div[@class='main-header']").should('have.text', 'Practice Form');
    })

    it('Submit the form', () => {
        var firstName = "firstName";
        var lastName = "lastName";
        var userEmail = "test@gmail.com";
        var gender = 'Female';
        var mobileNumber = "1234567890";
        var subjects = "Computer Science";
        var imagePath = "cypress/fixtures/dogPhoto.jpg";
        var currentAddress = "This is my current address.";

        cy.xpath("//input[@placeholder='First Name']").type(firstName); //todo take this value from other file. VariablesFile.
        cy.xpath("//input[@placeholder='Last Name']").type(lastName);
        cy.xpath("//input[@id='userEmail']").type(userEmail);
        cy.xpath("//label[contains(text(),'" + gender + "')]/../input").click({ force: true }).should('be.checked');
        cy.xpath("//input[@id='userNumber']").type(mobileNumber);
        cy.xpath('//input[@id="dateOfBirthInput"]').click();
        cy.get('select[class="react-datepicker__year-select"]').select('1999').should('have.value', '1999');
        cy.get('select[class="react-datepicker__month-select"]').select('5').should('have.value', '5');
        cy.xpath("//div[contains(text(), '12')]").click();
        cy
            .xpath("//label[contains(text(), 'Subjects')]/../../div[2]")
            .type('Computer Science{enter}')
        cy.xpath("//label[contains(text(), 'Sports')]/../input").check({ force: true });
        cy
            .xpath("//input[@id='uploadPicture']")
            .click()
            .attachFile(imagePath);
        // cy.xpath("//input[@id='uploadPicture']").attachFile(imagePath);
        cy.get("#currentAddress").type(currentAddress);
        cy.xpath("//label[contains(text(), 'State and City')]/../../div[2]/div/div/div/div[contains(text(),'NCR')]").select();
        cy.xpath("//*[contains(text(),'Select City')]").click();
        cy.xpath("//div[contains(text(),'Delhi')]").click();
    })

    // it('Assert test data', () => {
    //     cy.assert_paragraph_contains("name", userName);
    //     cy.assert_paragraph_contains("email", userEmail);
    //     cy.assert_paragraph_contains("currentAddress", currentAddress);
    //     cy.assert_paragraph_contains("permanentAddress", permanentAddress);
    // })

    // it('Update test data', () => {
    //     userName = "Another test name";
    //     cy.xpath("//input[@id='userName']").type(userName);
    //     cy.assert_paragraph_contains("name", userName);
    // })
    //todo assert that all the tasks appear under the form
    //todo try to input an invalid email
})