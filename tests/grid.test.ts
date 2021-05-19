import { expect } from "chai";
import { GridPage } from "../pages/gridPage";
import { Page } from "../pages/page";

// It briefs the test summary/description  
describe("Load AG Grid", () => {
  // before hook will execute before every it statements
  before(() => {
    Page.open();
  });
  
  // test steps which get execute
  it("Should display the grids", () => {
    // it waits for mainGrid to get displayed
    GridPage.mainGrid.waitForDisplayed();

    /**
     * I'm using forEach here for readability purposes
     * The function iterates through the element array
     * and checks if element is displayed.
     */
    
    GridPage.columnHeader.forEach((el) => {
      expect(el.isDisplayed()).to.eql(true);
    });
  });
});
