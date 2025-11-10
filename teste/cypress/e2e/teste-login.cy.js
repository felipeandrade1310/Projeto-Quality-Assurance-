describe('Teste de cadastro', () => {
  it('Deve realizar login corretamente na página do AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app')
    cy.contains('Cadastrar').click();
    cy.get('[data-test="input-name"]').click();
    cy.get('[data-test="input-Felipe Andrade Alves').type();
  })

      // it('Deve realizar o cadastro com sucesso', () => {
      // cy.contains('Cadastrar').click();
    // cy.get('input[name="nome"]').type('Felipe QA');
    // cy.get('input[name="email"]').type(`felipe.qa${Date.now()}@teste.com`);
    // cy.get('input[name="password"]').type('123456');
    // cy.get('input[name="confirmPassword"]').type('123456');
    // cy.contains('Cadastrar').click();
    })

