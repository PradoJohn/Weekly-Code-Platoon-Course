describe("AboutPage.jsx",()=>{
  it("Will confirm Home structure is correct",()=>{ 

    cy.visit("/about/").should("exist")
    cy.get("#home-page").should("exist")
    cy.get("#home-page > h1").should("exist").should("have.text", "About Rick and Morty" )
  })
})