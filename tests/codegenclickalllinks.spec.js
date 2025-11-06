import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Amazon.in' }).click();
  await page.getByRole('link', { name: 'MX Player' }).click();
  await page.getByRole('link', { name: 'mx logo' }).click();
  await page.getByRole('link', { name: 'Sell', exact: true }).click();
  await page.getByRole('link', { name: 'Bestsellers' }).click();
  await page.getByRole('link', { name: 'Today\'s Deals' }).click();
  await page.getByRole('link', { name: 'New Releases' }).click();
  await page.getByRole('link', { name: 'Customer Service' }).click();
  await page.getByRole('link', { name: 'Fashion', exact: true }).click();
  await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).click();
  await page.getByRole('textbox', { name: 'Enter your mobile number or' }).fill('riyajpattan@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('R');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('Riyaz@123');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
});