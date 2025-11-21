import {test, expect} from '@playwright/test'


test("CONTEXT TEXT", async ({page})=>{
await page.goto("https://demoqa.com/automation-practice-form")
const elementheadding = await page. locator("div[class='practice-form-wrapper'] h5").
textContent()
console.log(elementheadding);
await expect(elementheadding).toBe("Student Registration Form
")

const allText = await page. locator(".form-label").allTextContents()
console.log(allText);