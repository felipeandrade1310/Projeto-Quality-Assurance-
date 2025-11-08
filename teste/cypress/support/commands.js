Cypress.Commands.add("login", (email, senha) => {
  cy.visit("/login");
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(senha);
  cy.contains("Entrar").click();
});
