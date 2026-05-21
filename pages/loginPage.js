class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#loginusername';
    this.passwordInput = '#loginpassword';
    this.loginMenu = '#login2';
    
    // this.loginButton = 'btn btn-primary';
  }

  async login(username, password) {
    await this.page.click(this.loginMenu);

    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);

    await this.page.getByRole('button', { name: 'Log in' }).click();
    
  }
}

module.exports = LoginPage;