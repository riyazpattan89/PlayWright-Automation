import { Page, Locator } from '@playwright/test'
//JSON testdata test in TYPE SCRIPT
import testdataJson from 'C:/Users/rp62040/playwriteautomation/tests/utils/testdata.json';
const testdata = testdataJson;


export default class AmazonLoginPage {
  readonly page: Page
  readonly loginButton: Locator
  readonly emailInput: Locator
  readonly continueButton: Locator
  readonly passwordInput: Locator
  readonly signInButton: Locator
  

  constructor(page: Page) {
    this.page = page
    this.loginButton = page.getByText('Hello, sign in')
    this.emailInput = page.locator('#ap_email_login')
    this.continueButton = page.locator('#continue')
    this.passwordInput = page.locator('#ap_password')
    this.signInButton = page.locator('#signInSubmit')
  }

  async goto(url: string = testdata.amazonurl) {
    await this.page.goto(url)
  }
  async clickloginButton() {
    await this.loginButton.click()
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email)
  }

  async clickContinue() {
    await this.continueButton.click()
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password)
  }

  async clickSignIn() {
    await this.signInButton.click()
  }

  // Convenience method to perform full sign-in flow
  async login(email: string, password: string) {
    await this.clickloginButton()
    await this.enterEmail(email)
    await this.clickContinue()
    await this.enterPassword(password)
    await this.clickSignIn()
  }
}
