const { test, expect } = require('@playwright/test');
import ENV from '../../utils/env';
import { login } from '../../utils/helpers';
const fs = require('fs');

// Function to read JSON file
function readTestCases(filePath) {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// Read test cases from the JSON file
const testCases = readTestCases('./testData/testCasesData.json');

test.beforeEach('Login to Asana',async ({ page }) => {
  login(page);
});

test.describe('Asana Data-Driven Tests', () => {
  testCases.forEach((data) => {
    test(data.name, async ({ page }) => {

      await test.step('Navigate to the project page', async () => {
        await page.getByText(data.leftNav).click();
      });

      await test.step('Verify the card is within the right column', async () => {
        await expect(await page.locator('//h3[contains(text(),"'+data.column.split(' ')[0]+'")]/ancestor::div[@class="BoardColumn-dragHandle"]/following-sibling::div//span[contains(@class,"BoardCard-taskName") and contains(text(),"'+data.card_title+'")]')).toBeVisible();
      });
      
    });
  });
});


// Read json file and assert that correct card title is displayed based on test case 
//test.describe('Asana Test Cases', () => {
  // testCases.forEach((testCase) => {
  //   test(testCase.name, async ({ page }) => {
  //       //Login
        

  //       //click on leftNav
        
        
  //   });
  // });
//});
