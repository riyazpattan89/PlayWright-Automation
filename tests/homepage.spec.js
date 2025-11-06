const {test, expect} = require('@playwright/test');

test('Home Page',async ({page})=>{
    await page.goto('https://www.amazon.in/');
    const pageTitle=page.title();
    console.log('The page title is:', pageTitle);
    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');

    const pageUrl=page.url();
    console.log('The page url is:', pageUrl);
    await expect(page).toHaveURL('https://www.amazon.in/');
    await page.close();
        
}) 