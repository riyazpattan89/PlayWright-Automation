import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('riyajpattan@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('R');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Riyaz@123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.getByLabel('Select the department you').selectOption('search-alias=amazon-pharmacy');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Vitamins & minerals' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Kids-Pro Chocolate - Bottle' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Add to Cart', exact: true }).click();
  await page1.getByRole('button', { name: 'Proceed to Buy' }).click();
  await page1.goto('https://www.amazon.in/checkout/p/p-404-9314036-6410700/pay?pipelineType=Chewbacca&referrer=pay');
});