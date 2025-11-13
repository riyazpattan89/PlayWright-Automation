import {test, expect} from '@playwright/test';
test('Locators test',async ({page})=>{

    await page.goto('https://www.amazon.in/');
    // Using getByAltText locator to locate the Amazon logo
    const amazonLogo= await page.getByAltText('nav-logo-sprites');
   // console.log('Amazon logo is visible:', await amazonLogo.isVisible());
    await expect(amazonLogo).toBeVisible();
});