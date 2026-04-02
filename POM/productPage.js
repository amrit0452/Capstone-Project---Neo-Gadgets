import { expect } from '@playwright/test';

export class ProductPage {
  constructor(page) {
    this.page = page;

    // Heading
    this.pageTitle = page.locator('h1:has-text("Our Collection")');

    // Search
    this.searchInput = page.locator('[data-testid="search-input"]');

    // Category Filter
    this.categoryDropdown = page.locator('[data-testid="category-select"]');

    // Product Cards
    this.productCards = page.locator('a[href^="/products/"]');

    // Specific Products
    this.firstProduct = page.locator('a[href="/products/1"]');
    this.secondProduct = page.locator('a[href="/products/2"]');

    // Add to cart buttons
    this.addToCartBtn1 = page.locator('[data-testid="add-to-cart-btn-1"]');
    this.addToCartBtn2 = page.locator('[data-testid="add-to-cart-btn-2"]');

    // Navbar
    this.productsLink = page.locator('a[href="/products"]');
    this.cartIcon = page.locator('a[href="/cart"]');
  }

  async goto() {
    await this.page.goto('https://gadget-emporium--amritraushan243.replit.app/products', {
      timeout: 60000
    });
  }
}