describe("Test 10", () => {
  it("will test that you can't catch more than 6 pokemon at a time", () => {
    cy.visit("/");

    // add the first six pokemon
    for (let index = 0; index < 6; index++) {
      cy.wait(1000);
      cy.get("ol > li > a").eq(index).click();
      cy.wait(1000);
      cy.get(".pokemon-card > button").click();
      cy.get("[href='/']").click();
    }

    // navigate to 7-th link (0-index = 6)
    cy.get("ol > li > a").eq(6).click();
    cy.wait(1000);
    cy.get(".pokemon-card > button").should("have.attr", "disabled");

    cy.get("[href='/team']").should("have.text", "My Team #6");

    cy.get("[href='/team']").click();

    cy.get(".pokemon-card").should("have.length", 6);
  });
});
