import {test, expect} from '@playwright/test';
import testdataJson from 'C:/Users/rp62040/playwriteautomation/tests/utils/testdata.json'; // no need for `assert` in TS when resolveJsonModule=true
const  testdata  = testdataJson;
//JSON testdata test in TYPE SCRIPT
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

});