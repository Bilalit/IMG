export default class {
  // static AcceptCookies() {
  //   cy.get("div[data-dialog]").contains("Accept all cookies").click();
  //   cy.scrollTo(0, 400, { duration: 1000 });
  // }
  static CheckEditorContainer() {
    cy.get("#root-shadow")
      .shadow()
      .find("div[data-ubq-internal-target='true']")
      .should("be.visible");
  }
  static SwitchesUIScale() {
    cy.get("button").contains("Large").click();
    cy.get("#root-shadow")
      .invoke("attr", "data-ubq-scale")
      .should("equal", "large");
  }
  static ThemeDrakLight(theme) {
    cy.get("button").contains(theme).click();
    cy.get("#root-shadow")
      .invoke("attr", "data-ubq-theme")
      .should("equal", "light");
  }
}
