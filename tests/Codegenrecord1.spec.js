import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=fashion');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('button', { name: 'Go', exact: true }).click({
    button: 'right'
  });
  await page.getByRole('link', { name: '8' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Dove Deep Repair Treatment' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Dove-Deep-Repair-Treatment-damaged/dp/B0CV5366CG/ref=sr_1_9?dib=eyJ2IjoiMSJ9.L8RX6CLOfl019Pf_ty1TY132aONIfl0Wj40oWzOp8Xi5YXTqMKv-dc0r6xWOqQvo4Hl7-oVRyLjuTxMbUcwxq1nFOyp3ihoIq2gFjOm_FUdksc9uYuyhUbTAdj1EJXYhLchW3V5zfmK6w6cnz69Tm5IszoruCSdwIzuYaXVH09cA9BiWyE9lJNDOCHWN15Cp7-jD9dhufp1IufRRHiwFwxlC2xfGBxvPgP6Ln89uMxa_keuQU1KJcdUMgN2zFQBIVLUqLRYBLiJe8XDTjgyQAasGob9B-KwhiHmqJhlIT38.hbrI3znnTVYadlUdCFZIZj0otjBFrKDfYXeKhFkpzI8&dib_tag=se&pf_rd_i=6648217031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-25&qid=1763112536&refinements=p_89%3Adove%2Cp_36%3A-50000&rnid=1741387031&s=beauty&sr=1-9&th=1');
  await page.locator('span').filter({ hasText: 'Selected filters: Beauty, ₹' }).first().click();
  const page4Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Dove Deep Repair Treatment' }).click();
  const page4 = await page4Promise;
});