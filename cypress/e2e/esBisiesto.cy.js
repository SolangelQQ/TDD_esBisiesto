describe("Calculador", () => {
  it("Shows the if is leap year", () => {
    cy.visit("/");
    cy.get("#anio").type(4);
    cy.get("#calcular-button").click();
  });
});
