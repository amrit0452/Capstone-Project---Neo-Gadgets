import { expect } from '@playwright/test';

export class RegisterPage {
  constructor(page) {
    this.page = page;

    // Inputs
    this.nameInput = page.locator('#name-input');
    this.emailInput = page.locator('#email-input');
    this.passwordInput = page.locator('#password-input');
    this.confirmPasswordInput = page.locator('#confirm-password-input');

    // Button
    this.registerBtn = page.locator('#register-btn');

    // Error messages
    this.nameError = page.locator('#name-error');
    this.emailError = page.locator('#email-error');
    this.passwordError = page.locator('#password-error');
    this.confirmPasswordError = page.locator('#confirm-password-error');
  }

  async goto() {
    await this.page.goto('https://52005d9c-8a43-4314-b8d1-dd4471573c00-00-156tikilc0pa2.spock.replit.dev/register.html');
  }

  async fillForm(name, email, password, confirmPassword) {
    
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async clickRegister() {
    await this.registerBtn.click();
  }

  async registerUser(name, email, password, confirmPassword) {
    await this.fillForm(name, email, password, confirmPassword);
    await this.clickRegister();
  }
}