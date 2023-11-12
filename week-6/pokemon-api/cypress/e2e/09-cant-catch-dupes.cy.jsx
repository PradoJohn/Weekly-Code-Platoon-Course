describe("Test 9", () => {
  it("will test that you can't catch the same pokemon twice", () => {
    cy.visit("/pokemon/bulbasaur");

    cy.wait(1000);

    cy.get(".pokemon-card > button").click();

    cy.get("[href='/team']").should("have.text", "My Team #1");

    cy.get("[href='/team']").click();

    cy.get(".pokemon-card").should("have.length", 1);

    cy.get(".pokemon-card button").should("have.text", "Release");

    cy.get(".pokemon-card button").click();

    cy.get("[href='/team']").should("have.text", "My Team #0");

    cy.get(".pokemon-card").should("have.length", 0);

    cy.get("h3").should("have.text", "No Pokemon Caught Yet");
  });
});
