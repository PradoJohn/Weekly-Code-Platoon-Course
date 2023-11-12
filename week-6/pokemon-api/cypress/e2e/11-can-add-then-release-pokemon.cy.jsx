describe("Test 11", () => {
  it("tests that you can add six pokemon then release all of them", () => {
    cy.visit("/");

    // add the first six pokemon
    for (let index = 0; index < 6; index++) {
      cy.wait(1000);
      cy.get("ol > li > a").eq(index).click();
      cy.wait(1000);
      cy.get(".pokemon-card > button").click();
      cy.get("[href='/']").click();
    }

    cy.get("[href='/team']").click();

    for (let index = 0; index < 6; index++) {
      cy.get(".pokemon-card > button").eq(0).click();
    }

    cy.get(".pokemon-card").should("have.length", 0);

    cy.get("[href='/team']").should("have.text", "My Team #0");

    cy.get(".pokemon-card").should("have.length", 0);

    cy.get("h3").should("have.text", "No Pokemon Caught Yet");
  });
});
