describe("Header.jsx",()=>{
  it("check all links are available to the correct routes", ()=>{

    cy.visit("/")
    cy.get(".nav-link")
    .eq(0)
    .should("contain.text", "CHARACTERS")
    .should("have.attr", "href", "/characters/")

    cy.get(".nav-link")
      .eq(1)
      .should("contain.text", "About")
      .should("have.attr", "href", "/about/")

    cy.get(".nav-link")
      .eq(2)
      .should("contain.text", "Favorites")
      .should("have.text", "href", "/favorites/")

    cy.get("nav > form").should("exist")
    cy.get("form > input").should("have.attr", "placeholder", "Name")
    cy.get("form > button").should("have.attr", "type", "submit")
    
  });
});