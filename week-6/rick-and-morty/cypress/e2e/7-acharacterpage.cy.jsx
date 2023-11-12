describe("ACharacterPage.jsx", () => {
  it("Ensure you can select a character and view their details within the ACharacterPage.jsx", () => {
    cy.visit("/characters/");
    cy.wait(1000);
    cy.get(".btns").eq(0).click();

    cy.location().should((location) => {
      expect(location.pathname).to.equal("/character/1/");
    });

    cy.wait(1000);

    cy.get("#a-character > img").should(
      "have.attr",
      "src",
      "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    );

    cy.get(".char-description > li")
      .eq(0)
      .should("have.text", "Species: Human")

    cy.get(".char-description > li")
      .eq(1)
      .should("have.text", "Gender: Male")

      cy.get(".char-description > li")
      .eq(2)
      .should("have.text", "Origin: Earth (C-137)")

      cy.get(".char-description > li")
      .eq(3)
      .should("have.text", "Location: Citadel of Ricks")
    
      cy.get(".char-description > li")
      .eq(4)
      .should("have.text", "Created: 2017-11-04T18:48:46.250Z")

  });
});