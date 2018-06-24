"use strict";

const url = "https://github.com/jbelmont/browser-automation"

describe("Web Scraping", function() {
    it("Visits the browser-automation repository", function() {
        cy.visit(url);

        cy
        .get(".markdown-body.entry-content h1")
        .should("contain", "browser-automation");
    });
});
