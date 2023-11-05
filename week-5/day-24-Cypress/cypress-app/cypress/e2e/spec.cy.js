describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5175/')

    cy.get('p').should('contain','Click on the Vite and React logos to learn more')

  })
})