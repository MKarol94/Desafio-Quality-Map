/// <reference types="Cypress"/>


describe('Teste funcional de registro', () => {
     // Massa de teste para nome e sobrenome
     const primeiroNome = ['Maria', 'José', 'Edleuza', 'Petrônio', 'Florisbela', 'Elder'];
     const segundoNome = ['Santos', 'Silva', 'Souza', 'Almeida', 'Geronimo', 'Lima'];
     
     const email = ['a3sign@pandora.b', 'abk_333@hotmail.com', 'acacio_divix@hotmail.com', 'ac-ferian@bol.com.b', 'ca-felixx@bol.com.b'];
     
    it('Validando cadastro com sucesso', () => {
       cy.clicarRegister()

       // Escolher aleatóriamente o gênero
       const generoAleatorio = Cypress._.random(0, 1)
       if (generoAleatorio === 0){
            cy.get('#gender-male').check();

       } else {
            cy.get('#gender-female').check();
       }

       // Escolher aleatóriamente o nome e sobrenome de acordo com a massa de teste
       const nomeAleatorio = primeiroNome[Math.floor(Math.random() * primeiroNome.length)]
       const sobrenomeAleatorio = segundoNome[Math.floor(Math.random() * segundoNome.length)]
       cy.get('#FirstName').type(nomeAleatorio)
       cy.get('#LastName').type(sobrenomeAleatorio)

       
     // Escolher data já estabelecida
     cy.get('[name="DateOfBirthDay"]').select('18');
     cy.get('[name="DateOfBirthMonth"]').select('March');
     cy.get('[name="DateOfBirthYear"]').select('1970');


      // Escolher aleatóriamente o e-mail de acordo com a massa de teste
      const emailAleatorio = email[Math.floor(Math.random() * email.length)]
      cy.get('#Email').type(emailAleatorio)
       
      // Digitar senha
      cy.get('#Password').type('Senha123*')
      cy.get('#ConfirmPassword').type('Senha123*')

      // Clicar no botão Register 
      cy.get('#register-button').click()

    });


    // MENSAGEM DE ERRO - PRIMEIRO NOME
    
    it('Validando mensagem de erro - Primeiro Nome', () => {
     cy.clicarRegister()

     const generoAleatorio = Cypress._.random(0, 1)
     if (generoAleatorio === 0){
          cy.get('#gender-male').check();

     } else {
          cy.get('#gender-female').check();
     }

     const sobrenomeAleatorio = segundoNome[Math.floor(Math.random() * segundoNome.length)]
     
     cy.get('#LastName').type(sobrenomeAleatorio)

     const anoAtual = new Date().getFullYear();
     const anoMinimo = anoAtual - 100; 
     const anoMaximo = anoAtual - 18; 
     const anoAleatorio = Cypress._.random(anoMinimo, anoMaximo);
     cy.get('[name="DateOfBirthYear"]').select(`${anoAleatorio}`);

    const emailAleatorio = email[Math.floor(Math.random() * email.length)]
    cy.get('#Email').type(emailAleatorio)
    
    cy.get('#Password').type('Senha123*')
    cy.get('#ConfirmPassword').type('Senha123*')

     // Primeiro Nome vazio 
     cy.get('#FirstName').type(' ')
     cy.get('#register-button').click()
     cy.get('.field-validation-error').should('contain', 'First name is required.')

     });

     // MENSAGEM DE ERRO - ÚLTIMO NOME
    
    it('Validando mensagem de erro - último Nome', () => {
     cy.clicarRegister()

     const generoAleatorio = Cypress._.random(0, 1)
     if (generoAleatorio === 0){
          cy.get('#gender-male').check();

     } else {
          cy.get('#gender-female').check();
     }

     const nomeAleatorio = primeiroNome[Math.floor(Math.random() * primeiroNome.length)]
     cy.get('#FirstName').type(nomeAleatorio)

     const anoAtual = new Date().getFullYear();
     const anoMinimo = anoAtual - 100; 
     const anoMaximo = anoAtual - 18; 
     const anoAleatorio = Cypress._.random(anoMinimo, anoMaximo);
     cy.get('[name="DateOfBirthYear"]').select(`${anoAleatorio}`);

    const emailAleatorio = email[Math.floor(Math.random() * email.length)]
    cy.get('#Email').type(emailAleatorio)
    
    cy.get('#Password').type('Senha123*')
    cy.get('#ConfirmPassword').type('Senha123*')

     // último Nome vazio 
     cy.get('#LastName').type(' ')
     cy.get('#register-button').click()
     cy.get('.field-validation-error').should('contain', 'Last name is required.')

     });

   
     // MENSAGEM DE ERRO - E-MAIL
    
    it('Validando mensagem de erro - e-mail', () => {
     cy.clicarRegister()

     const generoAleatorio = Cypress._.random(0, 1)
     if (generoAleatorio === 0){
          cy.get('#gender-male').check();

     } else {
          cy.get('#gender-female').check();
     }

     const nomeAleatorio = primeiroNome[Math.floor(Math.random() * primeiroNome.length)]
     const sobrenomeAleatorio = segundoNome[Math.floor(Math.random() * segundoNome.length)]
     cy.get('#FirstName').type(nomeAleatorio)
     cy.get('#LastName').type(sobrenomeAleatorio)

     const anoAtual = new Date().getFullYear();
     const anoMinimo = anoAtual - 100; 
     const anoMaximo = anoAtual - 18; 
     const anoAleatorio = Cypress._.random(anoMinimo, anoMaximo);
     cy.get('[name="DateOfBirthYear"]').select(`${anoAleatorio}`);

    cy.get('#Password').type('Senha123*')
    cy.get('#ConfirmPassword').type('Senha123*')

    //E-mail vazio
    cy.get('#Email').type(' ')
    cy.get('#register-button').click()
    cy.get('#Email-error').should('contain', 'Email is required.')

     });

     // MENSAGEM DE ERRO - SENHA

    it('Validando mensagem de erro - senha', () => {
     cy.clicarRegister()

     const generoAleatorio = Cypress._.random(0, 1)
     if (generoAleatorio === 0){
          cy.get('#gender-male').check();

     } else {
          cy.get('#gender-female').check();
     }

     const nomeAleatorio = primeiroNome[Math.floor(Math.random() * primeiroNome.length)]
     const sobrenomeAleatorio = segundoNome[Math.floor(Math.random() * segundoNome.length)]
     cy.get('#FirstName').type(nomeAleatorio)
     cy.get('#LastName').type(sobrenomeAleatorio)

     const anoAtual = new Date().getFullYear();
     const anoMinimo = anoAtual - 100; 
     const anoMaximo = anoAtual - 18; 
     const anoAleatorio = Cypress._.random(anoMinimo, anoMaximo);
     cy.get('[name="DateOfBirthYear"]').select(`${anoAleatorio}`);

    const emailAleatorio = email[Math.floor(Math.random() * email.length)]
    cy.get('#Email').type(emailAleatorio)
    
    //Senha vazia
    cy.get('#Password')
    cy.get('#register-button').click()
    cy.get('#Password-error').should('contain','Password is required.')

    cy.get('#ConfirmPassword').type('Senha123*')

     });


     // MENSAGEM DE ERRO - CONFIRMAÇÃO DE SENHA

    it('Validando mensagem de erro - confirmação de senha', () => {
     cy.clicarRegister()

     const generoAleatorio = Cypress._.random(0, 1)
     if (generoAleatorio === 0){
          cy.get('#gender-male').check();

     } else {
          cy.get('#gender-female').check();
     }

     const nomeAleatorio = primeiroNome[Math.floor(Math.random() * primeiroNome.length)]
     const sobrenomeAleatorio = segundoNome[Math.floor(Math.random() * segundoNome.length)]
     cy.get('#FirstName').type(nomeAleatorio)
     cy.get('#LastName').type(sobrenomeAleatorio)

     const anoAtual = new Date().getFullYear();
     const anoMinimo = anoAtual - 100; 
     const anoMaximo = anoAtual - 18; 
     const anoAleatorio = Cypress._.random(anoMinimo, anoMaximo);
     cy.get('[name="DateOfBirthYear"]').select(`${anoAleatorio}`);

    const emailAleatorio = email[Math.floor(Math.random() * email.length)]
    cy.get('#Email').type(emailAleatorio)

    cy.get('#Password').type('Senha123*')
    
    //Confirmação de senha vazia
    cy.get('#ConfirmPassword').type(' ')
    cy.get('#register-button').click()
    cy.get('#ConfirmPassword-error').should('contain','The password and confirmation password do not match.')

     });
     
     //TODOS OS CAMPOS VAZIOS
     
         it('Validar se os campos são obrigatórios e as mensagens de erro são apresentadas', () => {
          cy.visit("https://demo.nopcommerce.com/")
          cy.get('.ico-register').click()
          
          const generoAleatorio = Cypress._.random(0, 1); 
      
           if (generoAleatorio === 0) {
               cy.get('#gender-male') 
           } else {
               cy.get('#gender-female') 
           }
          
          cy.get('#FirstName')

          cy.get('#LastName')

          cy.get('[name="DateOfBirthYear"]')

          cy.get('[name="DateOfBirthMonth"]')
          
          cy.get('[name="DateOfBirthDay"]')
          
          cy.get('#Email').type(' ');
      
          cy.get('#Password')
      
          cy.get('#ConfirmPassword')
      
          cy.get('#register-button').click()
      
          cy.get('#FirstName-error').should('contain','First name is required.')
      
          cy.get('#LastName-error').should('contain','Last name is required')
      
          cy.get('#Email-error').should('contain','Email is required')
      
          cy.get('#Password-error').should('contain','Password is required')
      
          cy.get('#ConfirmPassword-error').should('contain','Password is required')
        });
     
     });
