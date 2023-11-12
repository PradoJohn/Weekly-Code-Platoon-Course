describe("Test 12", () => {
  it("will test that you can search for a pokemon by name or id", () => {
    cy.visit("/");

    cy.get("nav > input").should("have.text", "");

    cy.get("nav > input").type("bulbasaur");

    cy.get("nav > button").click();

    cy.get("h2").should("have.text", "bulbasaur");

    // input should be cleaned between calls
    cy.get("nav > input").should("have.text", "");

    cy.get("nav > input").type("144");

    cy.get("nav > button").click();

    cy.get("h2").should("have.text", "articuno");
  });
});
