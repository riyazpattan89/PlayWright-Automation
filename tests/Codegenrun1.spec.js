import { test, expect } from '@playwright/test';

test('logoclick', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.waitForTimeout(5000);
await page.getByRole('link', { name: 'Well Set 12 in 1 Multipurpose Chopper, Fruits & Vegetable Cutters'}).click();
await page.waitForTimeout(5000);
});