
describe('login', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.url()
            .should('include', 'https://qateste1--lojamodess.myvtex.com/_v/segment/admin-login/v1/login?returnUrl=%2F%3F')
    })
    
    
    it('vtex page', () => {
        cy.pause();

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
            .type('@Teste123', {log:false})

        // Click 'Continuar'
        cy.get('[class="vtex-button__label flex items-center justify-center h-100 ph6 w-100 border-box "]')
            .click()



    });
});