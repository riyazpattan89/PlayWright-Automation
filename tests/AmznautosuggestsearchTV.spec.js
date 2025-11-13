import {test, expect} from '@playwright/test';

test('amazonlistofitems', async ({ page }) => {
  await page.goto('https://www.amazon.in');
  await page.fill('#twotabsearchtextbox', 'samsung 4');
  await page.waitForSelector('div.s-suggestion');
  await page.click('div.s-suggestion:first-child');
 // await page.waitForSelector('div.s-result-item');

  const selecttvs = async (productName) => {
    const productList = await page.$$("div[class='a-section a-spacing-small a-spacing-top-small'] div a h2");
    for (const product of productList) {
      const textContent = await product.getAttribute('aria-label');
      if (textContent && textContent.includes(productName)) {
        await product.click();
        break;
      }
    }}
  await page.waitForTimeout(5000);

  await selecttvs('Samsung 108 cm (43 inches) Full HD Smart LED TV UA43T5450AKXXL (Black)');
 /* const tvlocator= await page.locator("div[class='a-section a-spacing-small a-spacing-top-small'] div a h2");
  await expect(tvlocator).toHaveText('Samsung 108 cm (43 inches) Full HD Smart LED TV UA43T5450AKXXL (Black)'); */
});
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