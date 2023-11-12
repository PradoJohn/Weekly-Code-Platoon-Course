describe("Test 7", () => {
  it("will test that structure of an empty team page", () => {
    cy.visit("/team");

    cy.get("h2").should("have.text", "My Pokemon Team");

    cy.get("h3").should("have.text", "No Pokemon Caught Yet");
  });
});
