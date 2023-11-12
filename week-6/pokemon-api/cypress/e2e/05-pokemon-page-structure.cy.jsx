describe("Test 5", () => {
  it("will test the basic structure of the Pokemon page", () => {
    cy.visit("/pokemon/bulbasaur");

    // wait 1 second for api call to complete
    cy.wait(1000);

    cy.get("h2").should("have.text", "bulbasaur");

    cy.get(".pokemon-card").should("exist");

    cy.get(".pokemon-card > h3").should("have.text", "bulbasaur");

    cy.get(".pokemon-card > img").should(
      "have.attr",
      "src",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    );

    cy.get(".pokemon-card > .moves > div").should("have.length", 4);

    cy.get(".pokemon-card > button").should("have.text", "Catch");
  });
});
