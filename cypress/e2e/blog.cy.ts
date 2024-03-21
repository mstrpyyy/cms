describe("E2E Blog", () => {
    it("Render content and redirect to detail", () => {
        cy.visit ("/")
        cy.get('[data-cy="blog-item"]').first().find('[data-cy=blog-redirect]').click()
        cy.url().should('match', /\/blog\/.+/)
    })
})