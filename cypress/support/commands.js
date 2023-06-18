import loc from '../support/locators'

Cypress.Commands.add('loginVtex', login => {

    // Logar na aplicação
    // Para ter acesso ao conteúdo
    // Tela de Email
    cy.get('[name="email"]')
        .type('guuh.santos153@gmail.com')
    cy.get('[data-testid="email-form-continue"]')
        .click()

    // Tela de Senha
    cy.get('[class="t-heading-4 c-on-base mb5"]')
        .should('have.text', 'Insira sua senha')
    cy.get('[name="password"]')
        .type('@Teste123', { log: false })

    // Click 'Continuar'
    cy.get('[class="vtex-button__label flex items-center justify-center h-100 ph6 w-100 border-box "]')
        .click()

});


Cypress.Commands.add('adicionarProdutoCarrinho', adicionarProduto => {

    // Selecionadno produto na tela home
    cy.get('[class="vtex-product-summary-2-x-productNameContainer vtex-product-summary-2-x-productNameContainer--shelf mv0 vtex-product-summary-2-x-nameWrapper vtex-product-summary-2-x-nameWrapper--shelf overflow-hidden c-on-base f5"]')
        .first()
        .click()

    cy.wait(5000)

    // Adicionando produto no carrinho
    cy.get('.vtex-flex-layout-0-x-flexColChild > .vtex-button > .vtex-button__label > .vtex-add-to-cart-button-0-x-buttonDataContainer > .vtex-add-to-cart-button-0-x-buttonText')
        .first()
        .click()

    // mensagem de adicionado no carrinho
    cy.get('.pr5')
        .should('be.visible');

    cy.wait(12000)

    // Adicionado mais uma unidade.
    cy.get('.vtex-product-list-0-x-quantitySelectorIncrease')
        .click()

    // Validar se houve a mudança e se tem 2 un
    cy.get('#product-list-quantity-stepper-311149')
        .should('have.value', '2')

    // Preencher o CEP
    cy.get('[id="shipping"]')
        .type('03755020')
    cy.get('[class="shipping-input__btn"]')
        .click()

    // Caso naõ tenha Cupom de desconto
    // ele vai adicionar
    cy.get('[id="coupon-input"]')
        .type('DESCONTO10');
    cy.contains('Aplicar')
        .click()

})

Cypress.Commands.add('logandoNaConta', loginConta => {
    // Está verificando se está visível a imagem principal 
    // no topo do site
    cy.get('[class="vtex-slider-layout-0-x-imageElement vtex-slider-layout-0-x-imageElement--home-main-banner vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--home-main-banner"]')
        .should('be.visible');

    // Selecionar o account    
    cy.get('[class="vtex-button__label flex items-center justify-center h-100 ph6 "]')
        .first()
        .click()
        .click()

    cy.wait(10000)

    // Selecionar a opção 
    // Logar através de E-mail e Senha
    cy.get(':nth-child(2) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label')
        .click()

    // Preenchendo com o E-mail
    cy.get('[class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2   w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body ph5 "]')
        .type('guuh.santos153@gmail.com')

    // Preenchendo a Senha
    cy.get('[class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2  br-0 br--left  w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body pl5 "]')
        .type('@Teste123', { log: false })

    // btn de 'Entrar'
    cy.get('[class="vtex-button__label flex items-center justify-center h-100 ph5 "]')
        .last()
        .click()
    cy.wait(5000)

})

Cypress.Commands.add('finalizandoCompra', finalizarCompra => {
    // Selecionadno produto na tela home
    cy.get(loc.PRODUTO.produtoProtetorDiario80)
        .first()
        .click()

    cy.wait(5000)

    // Adicionando produto no carrinho
    cy.get(loc.BUTTONS.btnAdicionarCarrinho)
        .first()
        .click()

    // mensagem de adicionado no carrinho
    cy.get(loc.SHOULD.msgAdicionadoCarrinho)
        .should('be.visible');

    cy.wait(15000)

    // Adicionado mais uma unidade.
    cy.get(loc.PRODUTO.acrescentarProduto)
        .click()

    // Validar se houve a mudança e se tem 2 un
    cy.get(loc.SHOULD.acrescentouProduto)
        .should('have.value', '2')

    // Preencher o CEP
    cy.get(loc.PREENCHIMENTO.cep)
        .type('03755020')
    cy.get(loc.BUTTONS.btnCep)
        .click()

    // Caso naõ tenha Cupom de desconto
    // ele vai adicionar
    cy.get(loc.PREENCHIMENTO.cupom)
        .type('DESCONTO10');
    cy.contains('Aplicar')
        .click()

    // Finalizando a compra
    cy.get(loc.BUTTONS.finalizarCompra)
        .click()

})