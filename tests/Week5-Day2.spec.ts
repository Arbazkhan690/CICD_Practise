import test from "@playwright/test";
import loginData from '../Utils/UserInfo.json';


for(let data of loginData){
test(`Learn to read json file ${data.TestCaseID}`, async({page})=>{
await page.goto('https://orgfarm-71e7a1be36-dev-ed.develop.my.salesforce.com/')
await page.locator('#username').fill(data.UserName)
await page.locator('#Login').click()

await page.locator('#password').fill(data.Password)
await page.locator('#Login').click()
  console.log("check for the Git changes")
//await page.locator('#label').click()
})
}

