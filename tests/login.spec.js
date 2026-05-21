
const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);

  await page.goto('https://www.demoblaze.com');
  await loginPage.login('standard_user', 'secret_sauce');

//   await page.waitForSelector('.inventory_list'); // Check if login succeeded

  console.log("Login test completed.");

})();