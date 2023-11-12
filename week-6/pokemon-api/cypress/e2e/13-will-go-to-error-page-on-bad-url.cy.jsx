describe("Test 13", () => {
  it("will test that you go to a unique error page on a bad url", () => {
    cy.visit("/doesntexist");

    cy.get("nav").should("not.exist");

    cy.get("#root > div").should("have.text", "404 Pokemon Not Found");
  });
});
