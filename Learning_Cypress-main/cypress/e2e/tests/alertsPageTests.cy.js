describe('Alerts tests', () => {

    before('Go to Alerts page', () => {
        cy.visit("https://demoqa.com/"); // Opens the URL
        cy.xpath('//div/h5[contains(text(), "Alerts, Frame & Windows")]').click();
        cy.wait(500);
        cy.xpath("//span[contains(text(), 'Alerts')]").click();
        cy.xpath("//div[@class='main-header']").should('have.text', 'Alerts');
    })

    it('Alert button', () => {

        cy.xpath("//button[@id='alertButton']").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('You clicked a button');
        })
    })

    it('Timer alert button', () => {
        cy.xpath("//button[@id='timerAlertButton']").click();
        cy.wait(6000);
        cy.on('window:alert', (t) => {
            expect(t).to.contains('This alert appeared after 5 seconds');
        })
    })

    it('Confirm alert button', () => {
        cy.xpath("//button[@id='confirmButton']").click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains('You clicked a button');
        })
        cy.on('window:confirm', () => true)
        cy.get('#confirmResult').should('have.text', 'You selected Ok');
    })

    // it.only('Confirm alert button', () => {
    //     cy.xpath("//button[@id='promtButton']").click();
    //     cy.window().then(function($win){
    //         cy.stub($win, 'prompt').returns('Elisa');
    //     })
    //     cy.on('window:confirm', () => true)
    //     cy.get('#promptResult').should('have.text', 'You entered Elisa');

    // })
})




