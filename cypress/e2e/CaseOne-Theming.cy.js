/// <reference types="cypress"/>
import CaseOneTheming from "..//Pages/CaseOne-Theming";
describe("Theming showcase uses various configuration options to communicate", () => {
  it("Navigate to ‘Theming’ showcase", () => {
    cy.visit("https://img.ly/showcases/cesdk/web/theming/web/index.html");
  });
  it("To Verify editor container", () => {
    CaseOneTheming.CheckEditorContainer();
  });
  it("To Verify switches UI scaling when click on Large", () => {
    CaseOneTheming.SwitchesUIScale();
  });
  it("To Verify theme switching when click on light button", () => {
    CaseOneTheming.ThemeDrakLight("Light");
  });
});
