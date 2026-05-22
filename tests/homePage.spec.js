const { chromium } = require('playwright');
const HomePage = require('../pages/HomePage');

(async () => {

    // Browser Launch
    const browser = await chromium.launch({headless: false});

    const page = await browser.newPage();

    // Create Object
    const homePage = new HomePage(page);

    // Open Website
    await homePage.openWebsite();

    // Validations
    await homePage.checkApplicationLoad();
    await homePage.checkLogo();
    await homePage.checkNavigationMenu();
    await homePage.checkCategories();
    await homePage.checkProductCards();
    await homePage.checkFooter();

    // Wait
    await page.waitForTimeout(3000);

    // Close Browser
    await browser.close();

})();