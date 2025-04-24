export default class mobaileBill{
    clickmobaileBillBtn(){
        cy.get('a[href="/finance/mobile-bill"]')
          .scrollIntoView()
          .should('exist')
          .and('be.visible')
          .click();
    }
    payMobileBill(){
        const x=500;
        cy.wait(x)
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-mobile-bill/app-mobile-bill-list-shell/app-mobile-bill-list/div/div/div[2]/mat-table/mat-row[2]/mat-cell[1]/mat-checkbox/div/div/input')
          .check({force: true});
        //Allowance Rate
        cy.wait(x)
        cy.get('[formcontrolname="allowanceRateAsContract"]')
          .eq(1)
          .should('exist')
          .and('be.visible')
          .clear()
          .type(5000);
        //Paid Amount
        cy.wait(x)
        cy.get('[formcontrolname="allowanceRate"]')
          .eq(1)
          .should('exist')
          .and('be.visible')
          .clear()
          .type(500);
        cy.contains('Make Payment ')
          .should('exist')
          .and('be.visible')
          .click()
        //Comments
        cy.get('[formcontrolname="payComments"]')
          .should('exist')
          .and('be.visible')
          .type('Paid');
        //Make payment
        cy.xpath('/html/body/div[3]/div[2]/div/mat-dialog-container/div/div/app-mobile-bill-make-payment-dialog/app-mobile-bill-make-payment-form-shell/app-mobile-bill-make-payment-form/div[2]/div[2]/button[1]/span[2]')
          .should('exist')
          .and('be.visible')
          .click();
    }

}