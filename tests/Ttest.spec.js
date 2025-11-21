import {test, expect} from '@playwright/test'


test("Calendar practice", async ({page})=>{
await page.goto("https://demo.automationtesting.in/Datepicker.html")
await page. locator("//img[@class='imgdp']").click()

const day = "12"
const month = "February"
const year = "2027"

const monthPicker = page.locator(".ui-datepicker-month")
const yearPicker = page.locator(".ui-datepicker-year")

while((await monthPicker.textContent()!= month)||(await yearPicker.textContent
()!= year) ) {
await page.getByText("Next").click()
}
await page.getByText(day,{exact: true}).last().click()
await expect(page.locator("#datepicker1")).toHaveValue('12/02/2027')

})
