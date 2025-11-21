import {test, expect} from '@playwright/test';
//import { RahulecomLoginpage } from '../pages/RahulecomLoginpage.js';
import {RahulecomLoginpage} from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/RahulecomLoginpage.ts';
  
const url="https://rahulshettyacademy.com/client/"
    const username="riyaz"
    const password="Riyaz@123"
test("Empty credentials error validation test", async ({ page }) => {
        const loginpage=new RahulecomLoginpage(page)
        await loginpage.launchURL(url)
       // await loginpage.loginIntoApplication("username","password")
        await expect(loginpage.errorMessage).toHaveText("Invalid credentials")
        await expect(loginpage.emailRequired).toHaveText("*Email is required")
    });