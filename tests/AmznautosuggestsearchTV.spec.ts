import {test, expect} from '@playwright/test';
import AmazonHomePage from './pages/AmazonHomePage';
import AmazonLoginPage from './pages/AmazonLoginPage';
import testdataJson from './utils/testdata.json';
const testdata = testdataJson;

test('amazonlistofitems @smoke', async ({ page }) => {

  const login=new AmazonLoginPage(page);
      await login.goto();
    const hm=new AmazonHomePage(page);  
       hm.getproductfromhomesearch('samsung 4')
       await page.waitForSelector('div.s-suggestion')
       await page.click('div.s-suggestion:first-child');
 
 // await page.waitForSelector('div.s-result-item');
const productName =('Samsung 108 cm (43 inches) Crystal 4K Vista Ultra HD Smart LED TV UA43UE81AFULXL')

const listItems = page.locator("div[class='a-section a-spacing-small a-spacing-top-small'] div a"); // adjust selector

//const productList = await page.$$("div[class='a-section a-spacing-small a-spacing-top-small'] div a");
  const count = await listItems.count();
  //await expect(count).toBeGreaterThan(0);
  let clicked = false;

  for (let i = 0; i < count; i++) {
    const item = listItems.nth(i);

    // If the visible text is inside a child, use: item.locator('.product-name').innerText()
    const text = (await item.innerText()).trim();

    if (text === productName) {
      await item.scrollIntoViewIfNeeded(); // helpful for long lists
      await item.click();
      clicked = true;
      break; // stop after selecting the first exact match
    }
  }


/*if (!clicked) {
    throw new Error(`Exact product not found in list: "${productName}"`);
  } 

  // Optional: verify outcome (navigate / details pane)
  await expect(page).toHaveURL(/\/products\/\d+/); // adjust as needed */
});

    

/* const productName =('Samsung 108 cm (43 inches) Crystal 4K Vista Ultra HD Smart LED TV UA43UE81AFULXL')
const selecttvs = async (productName) => {
    const productList = await page.$$("div[class='a-section a-spacing-small a-spacing-top-small'] div a");
    for (const product of productList) {
      const textContent = await product.getAttribute('aria-label');
      if (textContent && textContent.includes(productName)) {
        await product.click();
        break;
      }
    }} */
 

  //await selecttvs('Samsung 108 cm (43 inches) Full HD Smart LED TV UA43T5450AKXXL (Black)');
 /* const tvlocator= await page.locator("div[class='a-section a-spacing-small a-spacing-top-small'] div a h2");
  await expect(tvlocator).toHaveText('Samsung 108 cm (43 inches) Full HD Smart LED TV UA43T5450AKXXL (Black)'); */

/*
test('amazonlistofitems', async ({page})=>{

  //  constructor(page){
this.page = page;
this.selfproductList=".a-column .p13n-sc-truncate-desktop-type2";
    
  // Navigate to Amazon India
  await page.goto('https://www.amazon.in');

  // Type into the search box
  await page.fill('#twotabsearchtextbox', 'samsung 4');

  // Wait for the suggestions to appear
  await page.waitForSelector('div.s-suggestion');

  // Click on the first suggestion
  await page.click('div.s-suggestion:first-child');

  // Optional: wait for navigation
  await page.waitForLoadState('networkidle');

async selecttvs(productName) {
    console.log("Selecting the products from the Riyaz's Amazon user's products list");
  const productList = await this.page.$$(this.selfproductList);
  for (const product of productList) {
    const altText = await product.getAttribute('title');
    if (altText && altText.includes(productName)) {
      // await page.waitForSelector(productName);
       
      await product.click();
      break;
    
    }}}}

);
*/