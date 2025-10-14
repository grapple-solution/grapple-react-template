import { test, expect, defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 240_000,
})

// Define variables
let BASE_URL = (!process.env.BASE_URL) ? 'http://localhost:4000' : process.env.BASE_URL;

test.describe("Select All Items - test cases", () => {
  test.setTimeout(120_000)
  
  test('handle select all items functionality', async ({ page }) => {

    await test.step("navigate to application", async () => {
      await page.goto(BASE_URL);
      await page.waitForTimeout(500);
    });

    await test.step("handle select all items functionality", async () => {
      try {
        // Check if 'Select All Items' button exists
        const selectAllButton = page.getByRole('button', { name: 'Select All Items' });
        const isSelectAllVisible = await selectAllButton.isVisible();
        
        if (isSelectAllVisible) {
          console.log("'Select All Items' button found, clicking it...");
          await selectAllButton.click();
          await page.waitForTimeout(1000); // Wait after clicking
          
          // Check if 'Unselect All Items' button exists after selection
          const unselectAllButton = page.getByRole('button', { name: 'Unselect All Items' });
          const isUnselectAllVisible = await unselectAllButton.isVisible();
          
          if (isUnselectAllVisible) {
            console.log("'Unselect All Items' button found after selection - selection was successful");
          } else {
            console.log("'Unselect All Items' button not found after selection");
          }
        } else {
          console.log("'Select All Items' button not found on the page");
        }
      } catch (error) {
        console.log("ERROR: could not handle select all items functionality");
        throw error;
      }
    });

  });

});