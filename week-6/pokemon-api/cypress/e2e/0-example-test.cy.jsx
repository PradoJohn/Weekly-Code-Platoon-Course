describe("Test 0", () => {
  it("will test the basic structure of the Navbar", () => {
    cy.visit("/");

    cy.get("nav").should("exist");

    cy.get("nav > h1").should("have.text", "POKEDEX");
  });
});
