const {test, expect}=require('@playwright/test')
test('autosuggestivedropsown', async ({page}) => {
await page.goto('https://www.amazon.in/')
//await page. locator('#src').fill('Delhi');
//await page.waitForSelector(".nav-search-label")
await page.locator("//div[@class='nav-search-scope nav-sprite']").click()
await page.waitForTimeout(5000);

const fromCityOptions=await page.$$("//select[@id='searchDropdownBox']//option")
//const fromCityOptions=await page.$$("//option[contains(@value,'search-alias=')]");
//await page.waitForSelector(".nav-search-dropdown option");
//await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
//const fromCityOptions=await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");
for(let option of fromCityOptions)
{
const value=await option.textContent();
//console. log(value);  // to print all available options
if(value.includes('Amazon Devices'))
{
await option.click();
break; 
} 
await page.waitForTimeout(5000);

}});