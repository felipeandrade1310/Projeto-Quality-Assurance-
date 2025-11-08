import './commands'

describe('Teste de login', () => {
  it('Deve realizar login corretamente na página do AdoPet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login')
  })
})