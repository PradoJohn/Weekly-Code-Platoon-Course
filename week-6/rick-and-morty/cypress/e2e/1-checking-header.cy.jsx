describe("Header.jsx", ()=>{
  it("Check brand to be 'Rick and Morty'",()=>{
    
    cy.visit("/")
    
    cy.get("nav").should("exist")
    cy.get("nav > div").should("exist").should("have.class","container")
    cy.get("nav > div > a").should("exist").should("have.class", "navbar-brand")
    cy.get(".navbar-brand").should("have.text", "Rick and Morty")

  })

})