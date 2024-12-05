export default class payment{
    clickA2iPaymentBtn() {
        cy.get('a[href="/finance/payment"]')
          .should('exist')
          .and('be.visible')
          .click()
      }
    fillupPaymentForm(paymentName) {
        const x=700;
        //Cashbook Type
        cy.contains("Cashbook");
        //Payment Type
        if(paymentName===' VAT '){
        cy.get('#mat-input-1')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[4]/span')
          .should('exist')
          .and('be.visible')
          .click()

        }else{
        cy.get('#mat-input-1')
          .should('exist')
          .and('be.visible')
          .click()
          .type(paymentName)
          cy.wait(x)
          cy.contains(paymentName)
            .click({force: true})
        }
        
    if (paymentName===' Individual Payment '||paymentName===' Vendor Payment ') {
        //Date 
        cy.get('[formcontrolname="transactionDate"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .type("06/10/2024")
        cy.wait(x)
        //Fund Source
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click();
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click();
        //Charged Account 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Financial Code
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click();
        //Nothi Title
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[7]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("New Nothi")
        cy.wait(x)
          //Nothi Number
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[8]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("NTI-12345")
        cy.wait(x)
        //Nothi Approval Date  
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[9]/mat-form-field/div[1]/div/div[2]/input")
          .type("01/10/2024")
        cy.wait(x)        
        //Adjustment Date
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[10]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("03/10/2024")
        cy.wait(x)
        //Payment Method
        cy.contains("Cheque")
        //Ref / Cheque
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[12]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("Ref- Karibul Hasan")
        cy.wait(x)
        //Description
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[13]/mat-form-field/div[1]/div/div[2]/textarea")
          .should('exist')
          .and('be.visible').type("Payment cash")
        cy.wait(x)
        //Payment To ( Payee )
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input")
           .should('exist')
           .and('be.visible')
           .clear()
           .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]")
           .should('exist')
           .and('be.visible')
           .click()
        //Team 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Amount
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[2]/mat-form-field/div[1]/div/div[3]/input")
          .should('exist')
          .and('be.visible')
          .type("25000")
        cy.wait(x)
        //Net Payable
        //Auto fillup when Amount is given
        //VAT/ AIT
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[2]/div[1]/mat-slide-toggle/div/button')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        }else if(paymentName===' Cash Advance '||paymentName===' Cost Center ') {
        //Date 
        cy.get('[formcontrolname="transactionDate"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .type("06/10/2024")
        cy.wait(x)
        //Fund Source
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click();
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click();
        //Charged Account 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Financial Code
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click();
        //Nothi Title
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[7]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("New Nothi")
        cy.wait(x)
          //Nothi Number
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[8]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("NTI-12345")
        cy.wait(x)
        //Nothi Approval Date  
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[9]/mat-form-field/div[1]/div/div[2]/input")
          .type("01/10/2024")
        cy.wait(x)        
        //Adjustment Date
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[10]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("03/10/2024")
        cy.wait(x)
        //Payment Method
        cy.contains("Cheque")
        //Ref / Cheque
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[12]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("Ref- Karibul Hasan")
        cy.wait(x)
        //Description
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[13]/mat-form-field/div[1]/div/div[2]/textarea")
          .should('exist')
          .and('be.visible').type("Payment cash")
        cy.wait(x)
        //Payee Type
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]")
          .should('exist')
          .and('be.visible')
          .click()
        //Team 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Payment To ( Payee )
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input")
           .should('exist')
           .and('be.visible')
           .clear()
           .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]")
           .should('exist')
           .and('be.visible')
           .click()
        //Amount
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[2]/mat-form-field/div[1]/div/div[3]/input")
          .should('exist')
          .and('be.visible')
          .type("25000")
        cy.wait(x)
        //Net Payable
        //Auto fillup when Amount is given
        //VAT/ AIT
        cy.xpath('/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[2]/div[1]/mat-slide-toggle/div/button')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        }else if(paymentName===' AIT '||paymentName===' VAT '){
        //Date 
        cy.get('[formcontrolname="transactionDate"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .type("06/10/2024")
        cy.wait(x)
        //Fund Source
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[4]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click();
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click();
        //Charged Account 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Financial Code
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click();
        //Nothi Title
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[7]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("New Nothi")
        cy.wait(x)
          //Nothi Number
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[8]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("NTI-12345")
        cy.wait(x)
        //Nothi Approval Date  
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[9]/mat-form-field/div[1]/div/div[2]/input")
          .type("01/10/2024")
        cy.wait(x)        
        //Adjustment Date
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[10]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("03/10/2024")
        cy.wait(x)
        //Payment Method
        cy.contains("Cheque")
        //Ref / Cheque
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[12]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .type("Ref- Karibul Hasan")
        cy.wait(x)
        //Description
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[13]/mat-form-field/div[1]/div/div[2]/textarea")
          .should('exist')
          .and('be.visible').type("Payment cash")
        cy.wait(x)
        //Payee Type
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]")
          .should('exist')
          .and('be.visible')
          .click()
        //Team 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[2]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Payment To ( Payee )
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[1]/mat-form-field/div[1]/div/div[2]/input")
           .should('exist')
           .and('be.visible')
           .clear()
           .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]")
           .should('exist')
           .and('be.visible')
           .click()
        //Amount
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[3]/div/div[1]/div[2]/mat-form-field/div[1]/div/div[3]/input")
          .should('exist')
          .and('be.visible')
          .type("25000")
        cy.wait(x)
        //Net Payable
        //Auto fillup when Amount is given
        //VAT/ AIT
        cy.wait(x)

        }else{
        //Date 
        cy.get('[formcontrolname="transactionDate"]')
          .should('exist')
          .and('be.visible')
          .clear()
          .type("06/10/2024")
        cy.wait(x)
        //Charged Account 
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[5]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Financial Code
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[1]/div[6]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[1]")
          .should('exist')
          .and('be.visible')
          .click()
        //Invoice Number
        cy.get('[formcontrolname="invoiceNumber"]')
          .should('exist')
          .and('be.visible')
          .type('IN-12309')
        cy.wait(x)
        //Invoice Date
        cy.get('[formcontrolname="invoiceDate"]')
          .should('exist')
          .and('be.visible')
          .type('14/11/2024') 
        cy.wait(x)
        //Is Mushak
        cy.get('[id="isMushak-input"]')
          .check()
        cy.wait(x)
        //Purpose of Payment
        cy.get('[formcontrolname="purposeOfPayment"]')
          .should('exist')
          .and('be.visible')
          .type('Purpose Of Payment') 
        cy.wait(x)
        //Payment Method
        //Ref / Cheque
        cy.get('[formcontrolname="reference"]')
          .should('exist')
          .and('be.visible')
          .type('Che-4578')
        cy.wait(x) 

        //Authorized By
        cy.get('[formcontrolname="authorizedPersonId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x) 
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[3]')
          .click()
        //Description 
        cy.get('[formcontrolname="description"]')
          .should('exist')
          .and('be.visible')
          .type('Description')
        cy.wait(x) 
        //Payee Type
        //Payee
        cy.get('[formcontrolname="nonPOPayee"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x) 
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[2]')
          .click()
        //Team
        cy.get('[formcontrolname="team"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x) 
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[2]')
          .click()
        //Quantum Supplier ID

        //Amount
        cy.get('[formcontrolname="amount"]')
          .should('exist')
          .and('be.visible')
          .type('30000')
        cy.wait(x)
        //Project
        cy.get('[placeholder="Donor roject"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .click() 
        //Task
        cy.get('[formcontrolname="taskId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[2]')
          .click()
        //Cost Center
        cy.get('[formcontrolname="costCentreId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .click()
        //Fund
        cy.get('[formcontrolname="fundId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .click()
        //Donor
        cy.get('[formcontrolname="donorId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .click()
        //Responsible Party
        cy.get('[formcontrolname="donorResponsiblePartyId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .click()
        //Contract
        cy.get('[formcontrolname="donorContractId"]')
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath('/html/body/div[3]/div/div/div/mat-option[1]')
          .click()  
        
        }   
      }
    payType(){
        //Payee Type
        const x=700;
        cy.xpath("/html/body/app-root/app-erp-sidenav/div/div/div[2]/main/app-payment/app-payment-form-shell/app-payment-form/div/form/div[2]/div[1]/mat-form-field/div[1]/div/div[2]/input")
          .should('exist')
          .and('be.visible')
          .click()
        cy.wait(x)
        cy.xpath("/html/body/div[3]/div/div/div/mat-option[2]")
          .should('exist')
          .and('be.visible')
          .click()
    }
    uploadAttachment(){
        //Upload Attachment
        cy.get('[type="file"]')
          .attachFile("gov.jpg")
        

    }
    clickSubmitBtn(){
        cy.contains('Submit')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickSaveAndRetainBtn(){
        cy.contains('Save and Retain')
          .should('exist')
          .and('be.visible')
          .click()
    }
    clickResetBtn(){
        cy.contains('Reset')
          .should('exist')
          .and('be.visible')
          .click()
    }


}