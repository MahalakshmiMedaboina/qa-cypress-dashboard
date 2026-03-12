describe("Submit form", () => {

  it("should submit developer name", () => {

    // Open demo form page
    cy.visit("https://devexpress.github.io/testcafe/example/")

    // Enter developer name
    cy.get("#developer-name").type("Mike")

    // Check agreement checkbox
    cy.get("#tried-test-cafe").click()

    // Submit form
    cy.contains("Submit").click()

    // Verify success message
    cy.get("#article-header").contains("Thank you")

  })

})