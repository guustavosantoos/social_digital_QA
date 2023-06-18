import loginVtex from '../support/commands'
import adicionarProduto from '../support/commands'
import logandoNaConta from '../support/commands'
import loc from '../support/locators'
import { faker } from '@faker-js/faker';

const randomFirstName      = faker.person.firstName();
const randomLastName       = faker.person.lastName();
const randomEmail          = faker.internet.email();
const randomPhone          = faker.phone.number()


describe('homePage', () => {

    // Os cenários que possuem o '**' no final são aqueles cenários
    // que são obrigatórios no teste técnico
    // o restantes são um plus.

    beforeEach(() => {

        // Acessar a URL global na qual foi colocado
        cy.visit('/');

        // Verificar se está na URL correta
        cy.url()
            .should('include', 'https://qateste1--lojamodess.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=%2F%3F');

        // Comando criado para fazer passo a passo
        // de login na plataforma Vtex
        cy.loginVtex();

    });

    it('login with user', () => {

        // Está verificando se está visível a imagem principal 
        // no topo do site
        cy.get(loc.SHOULD.imgPrincipal)
            .should('be.visible');

        // Selecionar a label de conta    
        cy.get(loc.LABEL.labelConta)
            .first()
            .click()
            .click()

        cy.wait(10000)

        // Selecionar a opção 
        // Logar através de E-mail e Senha
        cy.get(loc.BUTTONS.btnLoginEmailSenha)
            .click()

        // Preenchendo com o E-mail
        cy.get(loc.PREENCHIMENTO.email)
            .type('guuh.santos153@gmail.com') // Alterar

        // Preenchendo a Senha
        cy.get(loc.PREENCHIMENTO.senha)
            .type('@Teste123', { log: false }) // Alterar

        // btn de 'Entrar'
        cy.get(loc.BUTTONS.btnEntrar)
            .last()
            .click()
        cy.wait(5000)
    });

    it('Validate the Home Page ', () => {

        // Está verificando se está visível a imagem principal 
        // no topo do site
        cy.get(loc.SHOULD.imgPrincipal)
            .should('be.visible');


    });

    it('open the shopping cart', () => {

        // Verificar se está na página home
        cy.get(loc.SHOULD.imgPrincipal)
            .should('be.visible');

        // Abrir o carrinho VAZIO
        cy.get(loc.LABEL.labelAbrindoCarrinho)
            .click()
            .wait(2000)

        // Verificar se está vazio
        cy.get(loc.SHOULD.carrinhoVazio)
            .should('have.text', 'Ops, seu carrinho ainda está vazio!')
    });

    it('Adding products to the cart **', () => {

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
            .pause()
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

    });

    it('Removing product from cart **', () => {
        cy.adicionarProdutoCarrinho();

        // Fechando o carrinho
        cy.get(loc.LABEL.labelFechandoCarrinho)
            .click()

        // Indo para a Home Page
        cy.get(loc.LINK.homePage)
            .click()
        //cy.wait(5000)

        // Selecionando o carrinho novamente
        cy.get(loc.LABEL.labelAbrindoCarrinho)
            .click()

        // removendo item do carrinho
        cy.get('.vtex-product-list-0-x-removeButton')
            .click()

        // Selecionando o carrinho novamente
        cy.get(loc.LABEL.labelAbrindoCarrinho)
            .click()

        // verificando se o carrinho está vazio
        cy.get(loc.SHOULD.carrinhoVazio)
            .should('have.text', 'Ops, seu carrinho ainda está vazio!')



    });

    it('subscribing to newslatter', () => {
        // Localizar e preencher o campo Nome
        cy.get(loc.PREENCHIMENTO.nome)
            .type(faker.person.firstName('male'))

        // O campo E-mail
        cy.get(loc.PREENCHIMENTO.emailNewslatter)
            .type(faker.internet.email())

        // Check nos termos da Modass
        cy.get('[class="vtex-container-newsletter-form__input aceite"]')
            .check()

        // Clicar em Enviar 
        cy.get(loc.BUTTONS.btnEnviar)
            .click()

        cy.get(loc.SHOULD.msgNewslatter)
            .should('be.visible')
    });

    it.only('buy a product', () => {
        cy.finalizandoCompra();

        // Validar se está na pagina de checkout
        cy.url()
            .should('include', 'https://qateste1--lojamodess.myvtex.com/checkout#/email')
        
        cy.wait(10000)
        // Preenchendo informações da compra
        // e-mail
        cy.get('[id="client-email"]')
            .type(faker.internet.email())
        // primeiro nome
        cy.get('[id="client-first-name"]')
            .type(faker.person.firstName())
        // ultimo nome
        cy.get('[id="client-last-name"]')
            .type(faker.person.lastName())
        // cpf 
        cy.get('[id="client-document"]')
            .type('08100162069')
        // telefone    
        cy.get('[id="client-phone"]')
            .type(faker.phone.number('119########'))
        // btn para pagamento
        cy.get('#go-to-shipping')            
            .click()

        // cep para entrega
        cy.get('[id="ship-postalCode"]')
            .type('03755020')
        cy.wait(3000)
        // número
        cy.get('.ship-number > .input-mini')
            .type('201')
        // complemento
        cy.get('[id="ship-complement"]')
            .type('Casa')
        cy.get('[id="ship-receiverName"]')
            .type(faker.person.firstName())
        // ir para o pagamento
        cy.get('[id="btn-go-to-payment"]')
            .click()

        // btn Finalizar Compra
        cy.get('[data-bind="fadeVisible: !window.router.sac.isActive() && window.paymentData.isPaymentButtonVisible(), click: submit, disable: window.checkout.disablePaymentButton"]')            
            .click()
        cy.wait(15000)
        
        // validar a mensagem de compra sucedida
        cy.get('[class="vtex-order-placed-2-x-confirmationTitle tc c-on-base mt7 mb0 t-heading-4"]')
            .should('be.visible')


    });

    afterEach(() => {
        // Limpar os caches
        cy.clearCookies();
        cy.clearLocalStorage();
    });

})
