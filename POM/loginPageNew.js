import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators (based on your HTML)
    this.emailInput = page.locator('[data-testid="email-input"]');
    this.passwordInput = page.locator('[data-testid="password-input"]');
    this.loginButton = page.locator('[data-testid="login-submit-btn"]');

    this.loginLink = page.locator('a[href="/login"]');
    this.registerLink = page.locator('a[href="/register"]');

    this.errorMessage = page.locator('text=Incorrect email or password'); // adjust if needed
  }

  async goto() {
    await this.page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async clearFields() {
    await this.emailInput.fill('');
    await this.passwordInput.fill('');
  }
}