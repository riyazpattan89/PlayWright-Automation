import {test, expect} from '@playwright/test'
import { RahulecomLoginpage } from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/RahulecomLoginpage'
import { RahulDashboard } from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/RahulDashboard'

let url = "https://rahulshettyacademy.com/client"
const username ="riyaz@gmail.com"
const password = "Riyaz@123"
const productName = "IPHONE 13 PRO"


let loginPage : RahulecomLoginpage
let dashboardPage : RahulDashboard

test.beforeEach(async ({page})=>{
loginPage = new RahulecomLoginpage(page)
dashboardPage = new RahulDashboard(page)
await loginPage. launchURL(url)
await loginPage.loginIntoApplication(username, password)

})