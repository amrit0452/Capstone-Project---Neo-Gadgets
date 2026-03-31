import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;

    // Header
    this.homeLink = page.locator('a[href="/"]');
    this.productsLink = page.locator('a[href="/products"]');
    this.cartIcon = page.locator('a[href="/cart"]');
    this.loginLink = page.locator('a[href="/login"]');
    this.registerLink = page.locator('a[href="/register"]');

    // Hero Section
    this.shopNowBtn = page.locator('a[href="/products"]', { hasText: 'Shop collection' });
    this.exploreDronesBtn = page.locator('a[href*="category=Drones"]');

    // Products
    this.productCards = page.locator('a[href^="/products/"]');
    this.firstProduct = page.locator('[data-testid="home-view-btn-1"]');
    this.secondProduct = page.locator('[data-testid="home-view-btn-2"]');

    // Footer
    this.footerText = page.locator('text=Cool Gadgets');
  }

  async goto() {
    await this.page.goto('https://gadget-emporium--amritraushan243.replit.app', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }
}