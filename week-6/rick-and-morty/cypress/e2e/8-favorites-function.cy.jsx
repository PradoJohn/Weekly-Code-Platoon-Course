describe("FavoritesPage.jsx", () => {
  it("check adding and removing from favorites", () => {
    cy.visit("/characters/");

    cy.wait(1000);

    cy.get(".btn-warning").eq(0).click();

    cy.get(".btn-warning").eq(1).click();

    cy.get(".btn-warning").eq(2).click();

    cy.get(".btn-warning").eq(3).click();

    cy.get(".btn-warning").eq(4).click();

    cy.get(".nav-link").eq(2).click();

    cy.get(".card").should("have.length", 5)

    cy.get(".btn-warning").eq(2).click();

    cy.get(".card").should("have.length", 4)
  });
});