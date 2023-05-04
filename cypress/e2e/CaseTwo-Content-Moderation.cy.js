/// <reference types="cypress"/>
import validatecontent from "..//Pages/CaseTwo-Content-Moderation";
describe("To Validating the content selecting any offending images, and replacing them", () => {
  it("Navigate to ‘Content Moderation’ showcase", () => {
    cy.visit(
      "https://img.ly/showcases/cesdk/web/content-moderation/web/index.html"
    );
  });
  it("To Verify the warning content when click on validating content button", () => {
    validatecontent.ClickValidatingContentBtn();
    validatecontent.WarningshownContent();
  });
  it("To Verify when click on select button", () => {
    validatecontent.ClickSelectBtn();
  });
  it("To Verify when click on replace image button", () => {
    validatecontent.ClickReplaceImageBtn();
  });
  it("To Verify when choose image to replace", () => {
    validatecontent.selectImagetoReplace();
  });
  it("To Verify when click on validate content after replaced warning image", () => {
    validatecontent.ClickValidatingContentBtn();
    validatecontent.ValidateAfterReplaceImageWraning();
  });
});
