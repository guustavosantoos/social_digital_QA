## Teste Técnico para vaga na Social Digital Commerce :man_technologist:	

#### Resumo sobre versões do Cypress e biblioteca:
• [Node](https://nodejs.org/en): *14.0.0*

  OBS* Para usar o comando acima precisa já possuir o *node.js* instalado
  ```
    • Execute esse comando para instalar a versão do node usada:
    $nvm use 14.0.0
  ```
  ```
   • Para saber a versão do node.js
    $node -v
  ```
  


• [Cypress](https://www.cypress.io/): *12.1.0*

  ```
   • Execute esse comando para instalar a versão usada nesse repositório:
   
   $npm install cypress@12.1.0
   ```

• [Faker-js](https://fakerjs.dev/api/): *8.0.2*
  • Para instalar a biblioteca que foi usada: 
  
  ```
    $npm install @faker-js/faker --save-dev
  ```
• Após instalar a biblioteca é preciso importar ela no arquivo que ela será usada.
```
  import { faker } from '@faker-js/faker';
```
<img width="329" alt="image" src="https://github.com/guustavosantoos/social_digital_QA/assets/65858920/443f393e-7c00-4644-879a-68e0d31da57b">



## Cenários
- Os cenários que foram obrigatórios seria de apenas adicionar e remover o produto no carrinho:
  <img width="392" alt="image" src="https://github.com/guustavosantoos/social_digital_QA/assets/65858920/b3db9220-9765-444c-8308-51bfec1906a4">

- Cenários adicionais que foram feitas:
  
  *CT001- Realizar o login com usuário (dentro da aplicação);*
  
  *CT002- Apenas acessar a HomePage e validar se está correto;*

  *CT003- Abrir o carrinho (vazio);*
  
  <img width="317" alt="image" src="https://github.com/guustavosantoos/social_digital_QA/assets/65858920/ff9eb306-706e-459d-b3e9-86c44f0fc19f">

  *CT004- Assinando o Newslatter;*
  
  *CT005- Comprando um produto (Fluxo inteiro);*
  
  <img width="337" alt="image" src="https://github.com/guustavosantoos/social_digital_QA/assets/65858920/f59389e0-590e-489f-83ba-b54cddb00406">


