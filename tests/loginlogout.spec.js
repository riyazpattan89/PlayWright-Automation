import {test, expect} from '@playwright/test';

//{test, expect}= require('@playwright/test');
test('Login and Logout',async ({page})=>{
    // CHECKING THE AMAZON LOGIN AND HELLO RIYAZ IS DISPLAYED OR NOT.
    await page.goto('https://www.amazon.in');
    await page.click('#nav-link-accountList-nav-line-1')
    await page.fill('#ap_email_login','riyajpattan@gmail.com')
    await page.waitForTimeout(2000)
    await page.click('.a-button-input')
    await page.fill('#ap_password','Riyaz@123')
    await page.click('#signInSubmit')
    await page.waitForTimeout(2000)

   const hellowriyaz= await page.locator('#nav-link-accountList-nav-line-1')
   // await page.waitForTimeout(3000)
    await expect(hellowriyaz).toBeVisible();
        await page.close();
})

//write a java bubble sort program
//write a java program to check if a number is prime or not

