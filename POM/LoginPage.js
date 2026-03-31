
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;

    // Inputs
    this.emailInput = page.locator('#email-input');
    this.passwordInput = page.locator('#password-input');

    // Button
    this.loginBtn = page.locator('#login-btn');

    // Errors
    this.emailError = page.locator('#email-error');
    this.passwordError = page.locator('#password-error');

    // Optional (if backend error exists)
    this.invalidCredsError = page.locator('#login-alert');

    // Link
    this.signupLink = page.locator('#signup-link');
  }

  async goto() {
    await this.page.goto('https://gadget-hub-central--amritrajconnect.replit.app/login.html');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}