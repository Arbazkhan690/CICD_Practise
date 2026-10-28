import test from "@playwright/test";
import loginData from '../Utils/UserInfo.json';


for(let data of loginData){
test(`Learn to read json file ${data.TestCaseID}`, async({page})=>{
await page.goto('https://login.salesforce.com')
await page.locator('#username').fill(data.UserName)
await page.locator('#Login').click()

await page.locator('#password').fill(data.Password)
await page.locator('#Login').click()
//await page.locator('#label').click()
})
}

