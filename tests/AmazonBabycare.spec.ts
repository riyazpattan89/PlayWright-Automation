import {test, expect} from '@playwright/test';
import AmazonHomePage from './pages/AmazonHomePage';
import AmazonLoginPage from './pages/AmazonLoginPage';
//JSON testdata test in TYPE SCRIPT
import testdataJson from './utils/testdata.json';
const testdata = testdataJson;


// Make sur ethe POM path are correct before running the test

test('test @smoke', async ({page})=>{

    //Login to Amazon application

   const login=new AmazonLoginPage(page);
    await login.goto();
    await login.login(testdata.email,testdata.password)
    await page.waitForTimeout(3000) 
    
    const homescreen=new AmazonHomePage(page);
    await homescreen.clickBabycareMenu();
    //await page.waitForTimeout(3000)

    await homescreen.selectbabyproducts("Lotions & creams");
await page.waitForTimeout(3000)


   //await homescreen.findoneprodfromlist("Mamaearth Gentle Cleansing Shampoo for Babies | Infused with Coconut, Jojoba Oil, Calendula Extract & Aloe Vera Extract | Tear-Free Natural Shampoo | 400 ml");
   //await page.waitForTimeout(5000)
   
 //   await homescreen.justoil();
   // await page.waitForTimeout(2000) */


}); 