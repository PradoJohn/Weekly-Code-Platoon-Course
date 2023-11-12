describe("Test 8", () => {
  it("will test that pokemon can be caught and the page updates as expected", () => {
    cy.visit("/");

    // wait 1 second for api call to complete
    cy.wait(1000);

    // bulbasaur
    cy.get("ol > li > a").eq(0).click();

    // /pokemon/bulbasaur may have it's own api call to make
    cy.wait(1000);

    cy.get(".pokemon-card > button").click();

    // after clicking button should have text Release
    cy.get(".pokemon-card > button").should("have.text", "Release");

    // after click Team button text should now reflect the team size
    cy.get("[href='/team']").should("have.text", "My Team #1");

    cy.get("[href='/']").click();

    cy.wait(1000);

    // charmander
    cy.get("ol > li > a").eq(3).click();

    cy.wait(1000);

    // Catch charmander
    cy.get(".pokemon-card > button").click();

    cy.get("[href='/team']").should("have.text", "My Team #2");

    cy.get("[href='/team']").click();

    cy.get(".pokemon-card").should("have.length", 2);

    cy.get(".pokemon-card h3").eq(0).should("have.text", "bulbasaur");

    cy.get(".pokemon-card h3").eq(1).should("have.text", "charmander");
  });
});
