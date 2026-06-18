import { test } from "@playwright/test";

test("", async ({ page }) => {
  //navigate to https://www.google.com
  await page.goto("https://www.google.com");

  //wait for 3 seconds
  await page.waitForTimeout(3000);

  let searchBox = page.locator("//textarea[@class='gLFyf']");
  //let searchBox = page.locator("textarea[jsname='yZiJbe']");

  

  await page.waitForTimeout(3000);

  //await searchBox.type("Playwright");
  await searchBox.fill("Playwright");


  await page.waitForTimeout(3000);

  await searchBox.press("Enter");
  
  await page.waitForTimeout(3000);
});



  