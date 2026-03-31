import { expect } from '@playwright/test';

export class ProfilePage {
  constructor(page) {
    this.page = page;

    // Navigation
    this.loginLink = page.locator('a[href="/login"]');
    this.profileLink = page.locator('a[href="/profile"]');
    this.logoutBtn = page.locator('[data-testid="logout-btn"]');

    // Login
    this.emailInput = page.locator('[data-testid="email-input"]');
    this.passwordInput = page.locator('[data-testid="password-input"]');
    this.loginBtn = page.locator('[data-testid="login-submit-btn"]');

    // Profile Fields
    this.nameInput = page.locator('[data-testid="profile-name-input"]');
    this.emailProfileInput = page.locator('[data-testid="profile-email-input"]');

    this.currentPassword = page.locator('[data-testid="current-password-input"]');
    this.newPassword = page.locator('[data-testid="new-password-input"]');

    this.saveBtn = page.locator('[data-testid="profile-save-btn"]');

    // Headings
    this.personalInfoHeading = page.locator('text=Personal Info');
    this.securityHeading = page.locator('text=Security');

    // Messages (generic)
    this.successMessage = page.locator('text=success');
  }

  async goto() {
    await this.page.goto('https://gadget-emporium--amritraushan243.replit.app/login', {
    //   timeout: 60000
    });
  }

  async login(email, password) {
    // await this.loginLink.click();
    // await this.emailInput.fill(email);
    // await this.passwordInput.fill(password);
    // await this.loginBtn.click();
     await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

  async goToProfile() {
    await this.profileLink.click();
  }
}