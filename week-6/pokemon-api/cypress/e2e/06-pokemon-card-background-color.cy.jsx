describe("Test 6", () => {
  it("will test that the pokemon cards have the correct background color / class", () => {
    cy.visit("/pokemon/bulbasaur");

    // wait 1 second for api call to complete
    cy.wait(1000);

    cy.get(".pokemon-card").should(
      "have.css",
      "background-color",
      "rgb(120, 200, 80)"
    );

    cy.visit("/pokemon/charmander");

    // wait 1 second for api call to complete
    cy.wait(1000);

    cy.get(".pokemon-card").should(
      "have.css",
      "background-color",
      "rgb(240, 128, 48)"
    );
  });
});
