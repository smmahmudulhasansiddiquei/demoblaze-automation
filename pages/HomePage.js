class HomePage {

    constructor(page) {
        this.page = page;

        // Locators
        this.logo = '#nava';
        this.navMenu = '#navbarExample';
        this.categories = '#cat';
        this.productCards = '.card';
        this.footer = '#footc';
    }

    // Open Website
    async openWebsite() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    // Application Load Check
    async checkApplicationLoad() {

        const url = this.page.url();

        if (url === 'https://www.demoblaze.com/') {
            console.log('✅ Application Loaded Successfully');
        } else {
            console.log('❌ Application Load Failed');
        }
    }

    // Logo Check
    async checkLogo() {

        const logoVisible = await this.page.locator(this.logo).isVisible();

        if (logoVisible) {
            console.log('✅ Logo is Visible');
        } else {
            console.log('❌ Logo is Not Visible');
        }
    }

    // Navigation Menu Check
    async checkNavigationMenu() {

        const navVisible = await this.page.locator(this.navMenu).isVisible();

        if (navVisible) {
            console.log('✅ Navigation Menu is Visible');
        } else {
            console.log('❌ Navigation Menu is Not Visible');
        }
    }

    // Categories Check
    async checkCategories() {

        const categoryVisible = await this.page.locator(this.categories).isVisible();

        if (categoryVisible) {
            console.log('✅ Product Categories Available');
        } else {
            console.log('❌ Product Categories Not Found');
        }
    }

    // Product Cards Check
    async checkProductCards() {

        const productCount = await this.page.locator(this.productCards).count();

        if (productCount > 0) {
            console.log('✅ Product Cards Displayed');
        } else {
            console.log('❌ Product Cards Not Displayed');
        }
    }

    // Footer Check
    async checkFooter() {

        const footerVisible = await this.page.locator(this.footer).isVisible();

        if (footerVisible) {
            console.log('✅ Footer is Visible');
        } else {
            console.log('❌ Footer is Not Visible');
        }
    }

}

module.exports = HomePage;