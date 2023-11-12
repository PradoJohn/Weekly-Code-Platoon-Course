describe("HomePage.jsx",()=>{
  it("Will confirm Home structure is correct",()=>{ 

    cy.visit("/").should("exist")
    cy.get("#home-page").should("exist")
    cy.get("#home-page > h1").should("exist").should("have.text", "Welcome Rick and Morty Fan Page" )
  })
})