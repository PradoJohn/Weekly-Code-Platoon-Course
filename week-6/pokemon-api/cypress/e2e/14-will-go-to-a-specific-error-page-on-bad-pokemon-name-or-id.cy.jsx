describe("Test 14", () => {
  it("will test that you go to unique Pokemon error page on bad search input", () => {
    cy.visit("/");

    cy.get("nav > input").type("Missingno");

    cy.get("nav > button").click();

    cy.get("nav").should("exist");

    // don't forget the quotes around the pokemon name
    cy.get("#root > div").should(
      "have.text",
      "No such pokemon with name or id 'Missingno' exists!"
    );
  });
});
