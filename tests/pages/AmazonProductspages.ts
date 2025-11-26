import { Page, Locator } from '@playwright/test'

export default class AmazonDashboardPage {
  readonly page: Page
  readonly ordersLink: Locator
  readonly bpmonitors: Locator
  readonly selectedmonitor: Locator
  readonly addtocart:Locator
 
  constructor(page: Page) {
    this.page = page
    this.ordersLink = page.locator('#nav-orders')
    this.bpmonitors=page.locator("//img[@alt='BP monitors']")
    this.selectedmonitor=page.locator("//span[contains(text(),'Dr. Morepen Arm Blood Pressure Monitor Model BP-15')]")
    this.addtocart=page.locator("a-autoid-4-announce")
    
  }

  async gotoOrders() {
    await this.ordersLink.click()
  }
   async BPmonitormachines() {
    await this.bpmonitors.click()
    await this.selectedmonitor.click()
    await this.addtocart.click()
  }
}
