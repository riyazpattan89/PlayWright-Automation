import { Page, Locator } from '@playwright/test'

export default class AmazonHomePage {
  readonly page: Page
  readonly searchInput: Locator
  readonly searchButton: Locator
  readonly accountMenu: Locator
  readonly cartLink: Locator
  readonly ribbonmenubaby : Locator
  readonly babyproductSelector: Locator
  readonly textelement: Locator
  readonly searchdropdownbox : Locator

  constructor(page: Page) {
    this.page = page
    this.searchInput = page.locator('#twotabsearchtextbox')
    this.searchButton = page.locator("//input[@id='nav-search-submit-button']")
    this.accountMenu = page.locator('#nav-link-accountList')
    this.cartLink = page.locator('#nav-cart')
    this.ribbonmenubaby = page.locator("//div[@id='nav-xshop']//a[contains(@class,'')][normalize-space()='Baby']")
    this.babyproductSelector=page.locator('.sl-sobe-carousel-sub-card-footer span')
    this.textelement = page.locator('div.s-suggestion')
    this.searchdropdownbox = page.locator('#searchDropdownBox')


  }

  async goto(url: string = 'https://www.amazon.in') {
    await this.page.goto(url)
  }

  async search(term: string) {
    await this.searchInput.fill(term)
    await this.searchButton.click()
  }

  async onlysearch() {
    await this.searchButton.click()
  }

  async openAccountMenu() {
    await this.accountMenu.click()
  }

  async goToCart() {
    await this.cartLink.click()
  }

  async clickBabycareMenu() {
    await this.ribbonmenubaby.click()
  }

  

 // async selectbabyproducts(productName: string){
    //await this.page.click(this.babyproductList);
  
/*
   async selectbabyproducts(productName) {
   // console.log("Selecting the products from the Riyaz's Amazon user's products list");
  const productList = await this.page.$$(this.babyproductList);
  for (const product of productList) {
    const altText = await product.getAttribute('title');
    if (altText && altText.includes(productName)) {
      // await page.waitForSelector(productName);
       
      await product.click();
      break; */

async selectbabyproducts(productName: string): Promise<void> {
  const babyproductList = await this.babyproductSelector.elementHandles();
  for (const product of babyproductList) {
    const altText = await product.getAttribute('')
    if (altText && altText.includes(productName)) {
      await product.click();
      break;
    }
  }
}

async clickonhomedropdown(){
const homedropdown = await this.searchdropdownbox.elementHandles();
for(const option of homedropdown)
{
let value=await option. textContent();
if(value && value.includes('search-alias=amazon-pharmacy'))
{
await this.page.selectOption("Amazon Pharmacy", value);
break;
}}}

async getproductfromhomesearch(abc : string) {
  await this.searchInput.fill(abc)
 
 //await this.page.waitForTimeout(2000);
 //await this.textelement.waitFor();
 // await this.page.click('div.s-suggestion:first-child');

}
}