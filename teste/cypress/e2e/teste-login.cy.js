describe('Teste de cadastro - AdoPet', () => {
  beforeEach(function () {
    cy.fixture('users').as('data');
  });

  it('Deve realizar cadastro corretamente na página do AdoPet', function () {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.contains('Cadastrar').click();

    const emailUnico = this.data.usuarioValido.email.replace('@', `+${Date.now()}@`);

    cy.get('[data-test="input-name"]').type(this.data.usuarioValido.nome);
    cy.get('[data-test="input-email"]').type(emailUnico);
    cy.get('[data-test="input-password"]').type(this.data.usuarioValido.senha);
    cy.get('[data-test="input-confirm-password"]').type(this.data.usuarioValido.senha);
    cy.get('[data-test="submit-button"]').click();

    // Espera até 5 segundos por mensagem de sucesso
    cy.contains('Cadastro realizado com sucesso', { timeout: 5000 }).should('be.visible');

    // Ou, se quiser forçar espera independente da mensagem:
    // cy.wait(5000);

    // Confirma redirecionamento pra tela de login
    cy.url().should('include', '/login');
  });
});
