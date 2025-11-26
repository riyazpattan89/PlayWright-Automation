import { Page, Locator } from '@playwright/test'

export default class AmazonDashboardPage {
  readonly page: Page
  readonly ordersLink: Locator
  readonly accountOrdersTitle: Locator
  readonly accountMenu: Locator
  readonly signOutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.ordersLink = page.locator('#nav-orders')
    this.accountMenu = page.locator('#nav-link-accountList')
    // These selectors may need adjustment depending on account UI
    this.accountOrdersTitle = page.locator('text=Your Orders')
    this.signOutButton = page.locator('text=Sign Out')
  }

  async gotoOrders() {
    await this.ordersLink.click()
  }

  async isOnOrdersPage() {
    return await this.accountOrdersTitle.isVisible()
  }

  async openAccountMenu() {
    await this.accountMenu.click()
  }

  async signOut() {
    await this.openAccountMenu()
    await this.signOutButton.click()
  }
}
