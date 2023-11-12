describe("Header.jsx", ()=>{
  it("Links will route to correct paths",()=>{
    cy.visit("/")

    cy.get(".nav-link")
      .eq(0)
      .click()

    cy.location().should((location)=> {
      expect(location.pathname.to.equal("/characters/"))
    })

    cy.get(".nav-link")
      .eq(1)
      .click()
    cy.location().should((location)=>{
      expect(location.pathname.to.equal("/about/"))  
    })
    
    cy.get(".nav-link")
      .eq(2)
      .click()
    cy.location().should((location)=>{
      expect(location.pathname.to.equal("/favorites/"))
    })
    

    cy.get("form > input").type("pickle rick")
    cy.get("form > button").click

    cy.location().should((location)=>{
      expect(location.pathname.to.equal("/results/pickle%20rick"))

    })
  })
})