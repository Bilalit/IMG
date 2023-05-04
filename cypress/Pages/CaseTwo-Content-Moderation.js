export default class {
  static ClickValidatingContentBtn() {
    cy.get("button")
      .contains("Validate Content")
      .should("be.visible")
      .click({ force: true });
  }
  static WarningshownContent() {
    cy.get(
      "div[class='ValidationBox_checkCollectionWrapper__V+Um2'] > div"
    ).should((el) => {
      expect(el).to.have.length(2);
      expect(el).to.contain("Weapons");
      expect(el).to.contain("Drugs");
    });
  }
  static ClickSelectBtn() {
    cy.contains("Select").eq(0).should("be.visible").click();
  }
  static ClickReplaceImageBtn() {
    cy.get("#root-shadow")
      .shadow()
      .find("button[name='canvas-action-replace']")
      .click();
  }
  static selectImagetoReplace() {
    cy.get("#root-shadow")
      .shadow()
      .find("button[name='assetLibraryCard-ly.img.image']")
      .eq(2)
      .click();
  }
  static ValidateAfterReplaceImageWraning() {
    cy.get(
      "div[class='ValidationBox_checkCollectionWrapper__V+Um2'] > div"
    ).should((el) => {
      expect(el).to.have.length(1);
      expect(el).to.contain("Drugs");
    });
  }
}
