
// describe('Check page elements', () => {
//     it('Verify title of the page positive', () => {
//         cy.visit("https://demoqa.com/");
//         cy.title().should('eq', 'ToolsQA');
//     })
// })
describe('Text box tests', () => {

    before('Go to Text Box page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.wait(500);
        cy.xpath("//span[contains(text(), 'Text Box')]").click();
        cy.xpath("//div[@class='main-header']").should('have.text', 'Text Box');
    })
    it('Submit the form', () => {
        var userName = "Elisa Enea";
        var userEmail = "test@gmail.com";
        var currentAddress = "This is the current address.";
        var permanentAddress = "This is my permanent address.";

        cy.xpath("//input[@id='userName']").type(userName); //todo take this value from other file. VariablesFile.
        cy.xpath("//input[@id='userEmail']").type(userEmail);
        cy.get("#currentAddress").type(currentAddress);
        cy.get("#permanentAddress").type(permanentAddress);
        cy.get("#submit").click();

        var userName = "Elisa Enea";
        var userEmail = "test@gmail.com";
        var currentAddress = "This is the current address.";
        var permanentAddress = "This is my permanent address.";

        cy.assert_paragraph_contains("name", userName);
        cy.assert_paragraph_contains("email", userEmail);
        cy.assert_paragraph_contains("currentAddress", currentAddress);
        cy.assert_paragraph_contains("permanentAddress", permanentAddress);

        var userName = "Another test name";
        cy.xpath("//input[@id='userName']").type(userName);
        cy.assert_paragraph_contains("name", userName);
    })
})

describe('Check Box tests', () => {

    before('Go to Check Box page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Check Box')]").click();
    })

    it('Check and assert', () => {
        
        cy.xpath("//button[@aria-label='Expand all']").click({ force: true });
        cy.xpath("//span[contains(text(),'Notes')]/../span[1]").click();

        cy.checkbox_class_assert('Notes', 'check');
        cy.checkbox_class_assert('Desktop', 'half-check');
        cy.checkbox_class_assert('Home', 'half-check');

        cy.xpath("//span[contains(text(),'Desktop')]/../span[1]").click();

        cy.checkbox_class_assert('Notes', 'check');
        cy.checkbox_class_assert('Desktop', 'check');
        cy.checkbox_class_assert('Commands', 'check');

        cy.xpath("//span[contains(text(),'Home')]/../span[1]").click();
        cy.xpath("//span[contains(text(),'Home')]/../span[1]").click();

        cy.checkbox_class_assert('Desktop', 'uncheck');
        cy.checkbox_class_assert('Documents', 'uncheck');
        cy.checkbox_class_assert('Downloads', 'uncheck');
    })
})

describe('Radio button tests', () => {

    before('Go to Radio button page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Radio Button')]").click();
    })

    it('Select options and assert', () => {
        cy.xpath("//label[contains(text(),'Yes')]/../input").click({ force: true }).should('be.checked');
        cy.radio_assert_option("Yes");

        cy.xpath("//label[contains(text(),'Impressive')]/../input").click({ force: true }).should('be.checked');
        cy.radio_assert_option("Impressive");
    })
})

describe('Web tables tests', () => {

    before('Go to Web tables page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Web Tables')]").click();
    })

    it('Complete the form', () => {
        cy.xpath('//button[contains(text(),"Add")]').click();
        cy.xpath("//input[@placeholder='First Name']").type('Elisa');
        cy.xpath("//input[@placeholder='Last Name']").type('Enea');
        cy.xpath("//input[@placeholder='name@example.com']").type('test@gmail.com');
        cy.xpath("//input[@placeholder='Age']").type('23');
        cy.xpath("//input[@placeholder='Salary']").type('4000');
        cy.xpath("//input[@placeholder='Department']").type('testing department');
        cy.xpath("//button[@id='submit']").click();
        // to validate here some invalid values or empty fields.

        cy.xpath("//input[@placeholder='Type to search']").type('Elisa');
        cy.xpath("//div[@class='rt-tr -odd']/div[1]").should('have.text', 'Elisa');
    })
})

describe('Buttons tests', () => {

    before('Go to Buttons page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Elements")]').click();
        cy.xpath("//span[contains(text(), 'Buttons')]").click();
    })

    it('Press the buttons and assert', () => {
        cy.xpath("//button[@id='doubleClickBtn']").dblclick();
        cy.xpath("//button[@id='rightClickBtn']").rightclick();
        cy.xpath("//button[text()='Click Me']").click();

        // var paras = cy.xpath('//p[contains(text(), "You have done")]');
        cy.get('#doubleClickMessage').should('contain.text', 'You have done a double click');
        cy.get('#rightClickMessage').should('contain.text', 'You have done a right click');
        cy.get('#dynamicClickMessage').should('contain.text', 'You have done a dynamic click');
    })
})

