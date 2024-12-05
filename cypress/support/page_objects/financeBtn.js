export default class financeBtn{
    clickA2iFinanceBtn() {
        cy.contains('Finance')
          .should('exist')
          .and('be.visible')
          .click()
      }
}