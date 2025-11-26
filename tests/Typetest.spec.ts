import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationtesting.co.uk/dropdown.html');
  await page.getByRole('link', { name: 'Fish' }).click();
  await expect(page.locator('#outputMessage')).toContaiText('You clicked on menu option \'Fish\'');
  await page.getByRole('link', { name: 'Tennis' }).click();
  await expect(page.locator('#outputMessage')).toContainText('You clicked on menu option \'Tennis\'');
  await page.locator('#cars').selectOption('honda');
  
});