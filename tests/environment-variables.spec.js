

import { test } from '@playwright/test';

test('@env-test', async ({ page }) => {

    console.log(process.env.PRACTICE_USERNAME);
    console.log(process.env.PRACTICE_PASSWORD);

    console.log(`username: ${process.env.PRACTICE_USERNAME}`);
    console.log(`password: ${process.env.PRACTICE_PASSWORD}`); 


    
});



test("Bypass Authentication by encoding credentials base64 format", async ({
  page,
}) => {
  let encodedCredentials = Buffer.from(`${process.env.PRACTICE_USERNAME}:${process.env.PRACTICE_PASSWORD}`).toString("base64");

  await page.setExtraHTTPHeaders({
    Authorization: `Basic ${encodedCredentials}`,
  });

  await page.goto("https://the-internet-5chk.onrender.com/basic_auth");

  await page.waitForTimeout(3000);
});


