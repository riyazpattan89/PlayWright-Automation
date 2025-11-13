import {test, expect} from '@playwright/test';
import { LoginPage } from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/LoginPage.js';
import { AmazonHomePage } from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/Amazonhomepage.js';


//const {test, expect}=require('@playwright/test')
test('MEATSELECTION', async ({page}) => {
const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('riyajpattan@gmail.com','Riyaz@123')
   page.on('dialog', async dialog=>{
    await dialog.dismiss(); 
    await page.waitForTimeout(3000)
   });

//Category selection from the homepage search dropdown page object from Amazon homepage
const hm=new AmazonHomePage(page);
await hm.selectCategory ('Amazon Pharmacy')
await page.locator(hm.homepagesearchbutton).click();

await page.waitForTimeout(1000);
// Click on the BP monitors image on the Amazon Pharmacy page
await hm.findbpmachine('Morepen');
await page.waitForTimeout(2000);

   
});
//const fromCityOptions=await page.$$("//select[@id='searchDropdownBox']//option")
   

/*
const selectmeat = async (productName) => {
    const productList = await page.$$("div[class$='a-section a-spacing-small a-spacing-top-small'] div a[class$='a-link-normal s-line-clamp-2 s-line-clamp-3-for-col-12 s-link-style a-text-normal'] h2");
    for (const product of productList) {
      const textContent = await product.getAttribute('aria-label');
      if (textContent && textContent.includes(productName)) {
        await product.click();
        break;
      }
    }}
*/
//await selectmeat("FreshToHome Premium Chicken Breast Fillet | 480g to 500g Pack| Boneless | Skinless | Antibiotic-Residue-Free | Fresh | Never Frozen");
//const fromCityOptions=await page.$$("//select[@id='searchDropdownBox']//option")
//const fromCityOptions=await page.$$("//option[contains(@value,'search-alias=')]");
//await page.waitForSelector(".nav-search-dropdown option");
//await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
//const fromCityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
/*for(let option of fromCityOptions)
{
const value=await option.textContent();
//console. log(value);  // to print all available options
if(value.includes('Amazon Devices'))
{
await option.click();
break; 
} */
//await page.waitForTimeout(5000);

