
class SignupPage {

    constructor(page) {
        this.page = page;

        // Locators
        this.signupButton = '#signin2';
        this.usernameInput = '#sign-username';
        this.passwordInput = '#sign-password';
        this.submitButton = 'button[onclick="register()"]';
    }

    async openSignupModal() {
        await this.page.click(this.signupButton);
        await this.page.waitForSelector(this.usernameInput);
    }

    async register(username, password) {

        if (username !== null) {
            await this.page.fill(this.usernameInput, username);
        }

        if (password !== null) {
            await this.page.fill(this.passwordInput, password);
        }

        await this.page.click(this.submitButton);
    }

    async getAlertText() {
        const dialog = await this.page.waitForEvent('dialog');
        const message = dialog.message();
        await dialog.accept();
        return message;     
    }
}

module.exports = SignupPage;