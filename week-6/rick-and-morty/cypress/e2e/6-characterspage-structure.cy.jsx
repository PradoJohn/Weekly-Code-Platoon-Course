describe("CharactersPage.jsx", () => {
  it("820 BootStrap Cards are being rendered", () => {
    cy.visit("/characters/");
    cy.get("h1").should("have.text", "Rick and Morty Characters");
    cy.wait(20000)
    cy.get(".card").should("have.length", 826)

    cy.get(".card > img")
      .eq(0)
      .should(
        "have.attr",
        "src",
        "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      );

    cy.get(".card-title").eq(0).should("have.text", "Rick Sanchez");

    cy.get(".card > img")
      .eq(825)
      .should(
        "have.attr",
        "src",
        "https://rickandmortyapi.com/api/character/avatar/826.jpeg"
      );

    cy.get(".card-title").eq(825).should("have.text", "Butter Robot");
  });
});