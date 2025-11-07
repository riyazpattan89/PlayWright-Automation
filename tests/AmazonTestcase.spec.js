import {test, expect} from '@playwright/test';
import { LoginPage } from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/LoginPage.js';
import { AmazonHomePage } from 'C:/Users/rp62040/playwriteautomation/node_modules/pages/Amazonhomepage.js';


test('test', async ({page})=>{
    //Login to Amazon application

    const login=new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('riyajpattan@gmail.com','Riyaz@123')
    await page.waitForTimeout(3000)

    const homescreen=new AmazonHomePage(page);
    await homescreen.amazonfresh();
    await page.waitForTimeout(3000)
   await homescreen.findoneprodfromlist('Oil & ghee');
   await page.waitForTimeout(2000)
    await homescreen.justoil();
   // await page.waitForTimeout(2000)


}); 