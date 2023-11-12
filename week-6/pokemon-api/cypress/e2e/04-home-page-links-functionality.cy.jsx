describe("Test 4", () => {
  it("will test that the pokemon links on Home Page work", () => {
    cy.visit("/");

    // wait 1 second for api call to complete
    cy.wait(1000);

    cy.get("[href='/pokemon/bulbasaur']").click();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/pokemon/bulbasaur");
    });
  });
});
