import {test, expect} from '@playwright/test';
test('products list',async ({page})=>{
    await page.goto('https://www.amazon.in/');
    const products=await page.$$ ("a");
    page.waitForSelector('a');
   // console.log('The number of products displayed on the homepage are:', products.gettextContent);
/*for (const pr of products){
    const productname= await pr.textContent();
    console.log('The product name is:', productname);
} */

for ( const pr of products){
    const products= await pr.textContent();
    console.log('The product name is:', products);
}
})