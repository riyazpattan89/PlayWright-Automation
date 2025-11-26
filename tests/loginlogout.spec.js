import {test, expect} from '@playwright/test';
const dataset=JSON.parse(JSON.stringify(require('C:/Users/rp62040/playwriteautomation/tests/utils/testdata.json')));
//const data=(import { testdata } from 'C:/Users/rp62040/playwriteautomation/tests/utils/testdata.json');

//import testdataJson from 'C:/Users/rp62040/playwriteautomation/tests/utils/testdata.json' assert { type: 'json' };

// Access the named property inside the JSON
const { testdata } = testdataJson;


//{test, expect}= require('@playwright/test');
test('Login and Logout',async ({page})=>{
    // CHECKING THE AMAZON LOGIN AND HELLO RIYAZ IS DISPLAYED OR NOT.
    await page.goto('https://www.amazon.in');
    await page.click('#nav-link-accountList-nav-line-1')
    await page.fill('#ap_email_login',testdata.email)
    await page.waitForTimeout(2000)
    await page.click('.a-button-input')
    await page.fill('#ap_password',testdata.password)
    await page.click('#signInSubmit')
    await page.waitForTimeout(2000)

   const hellowriyaz= await page.locator('#nav-link-accountList-nav-line-1')
   // await page.waitForTimeout(3000)
    await expect(hellowriyaz).toBeVisible();
        await page.close();
})

//write a java bubble sort program
//write a java program to check if a number is prime or not

