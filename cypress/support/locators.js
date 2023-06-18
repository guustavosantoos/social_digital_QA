const loc = {

    PREENCHIMENTO: { 
        email:                      '[class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2   w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body ph5 "]',
        emailNewslatter:            '[name="email"]',
        senha:                      '[class="vtex-styleguide-9-x-input ma0 border-box vtex-styleguide-9-x-hideDecorators vtex-styleguide-9-x-noAppearance br2  br-0 br--left  w-100 bn outline-0 bg-base c-on-base b--muted-4 hover-b--muted-3 t-body pl5 "]',
        nome:                       '[name="nome"]',
        cep:                        '[id="shipping"]',
        cupom:                      '[id="coupon-input"]',
    },

    BUTTONS: {
        btnConta:                   '[class="vtex-button__label flex items-center justify-center h-100 ph6 "]',
        btnLoginEmailSenha:         ':nth-child(2) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label',
        btnEntrar:                  '[class="vtex-button__label flex items-center justify-center h-100 ph5 "]',
        btnAdicionarCarrinho:       '.vtex-flex-layout-0-x-flexColChild > .vtex-button > .vtex-button__label > .vtex-add-to-cart-button-0-x-buttonDataContainer > .vtex-add-to-cart-button-0-x-buttonText',
        btnCep:                     '[class="shipping-input__btn"]',
        finalizarCompra:            '[class="minicart-footer-button"]',
        btnEnviar:                  '[class="container-newsletter-form__button"]'
    },

    SHOULD: {
        imgPrincipal:               '[class="vtex-slider-layout-0-x-imageElement vtex-slider-layout-0-x-imageElement--home-main-banner vtex-store-components-3-x-imageElement vtex-store-components-3-x-imageElement--home-main-banner"]',
        carrinhoVazio:              '[class="lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--text-empty-state-minicart"]',
        msgAdicionadoCarrinho:      '.pr5',
        acrescentouProduto:         '.vtex-product-list-0-x-inputContainer > .flex-auto',
        msgNewslatter:              '.container-form__messages--success',
    },

    LABEL: { 
        labelConta:                 '[class="vtex-button__label flex items-center justify-center h-100 ph6 "]',
        labelAbrindoCarrinho:        '[class="vtex-button__label flex items-center justify-center h-100 ph4 "]',
        labelFechandoCarrinho:      '[class="vtex-minicart-2-x-closeIconButton pa4 pointer bg-transparent transparent bn pointer"]',
    },

    PRODUTO: { 
        produtoProtetorDiario80:    '[class="vtex-product-summary-2-x-productNameContainer vtex-product-summary-2-x-productNameContainer--shelf mv0 vtex-product-summary-2-x-nameWrapper vtex-product-summary-2-x-nameWrapper--shelf overflow-hidden c-on-base f5"]',
        acrescentarProduto:          '.vtex-product-list-0-x-quantitySelectorIncrease',
    },

    LINK: {
        homePage:                   '.vtex-breadcrumb-1-x-homeLink',
    }
    



}

export default loc