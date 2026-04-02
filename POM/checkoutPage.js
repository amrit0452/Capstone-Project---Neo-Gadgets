import { expect } from '@playwright/test';

export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Login (same as profile)
    this.emailInput = page.locator('[data-testid="email-input"]');
    this.passwordInput = page.locator('[data-testid="password-input"]');
    this.loginBtn = page.locator('[data-testid="login-submit-btn"]');

    // Navigation
    // this.productsLink = page.locator('a[href="/products"]');
    this.productsLink = page.locator('nav a[href="/products"]');
    this.cartLink = page.locator('a[href="/cart"]');

    // Product
    // this.addToCartBtn = page.locator('[data-testid^="add-to-cart-btn"]');

    this.addToCartBtn = page.locator('#add-to-cart-btn-1');

    // Cart
    this.proceedToCheckoutBtn = page.locator('a[href="/checkout"]');

    // Checkout
    this.shippingAddress = page.locator('[data-testid="shippingAddress"]');
    this.codOption = page.locator('label:has-text("Cash on Delivery")');
    this.placeOrderBtn = page.locator('[data-testid="place-order-btn"]');

    // Order
    this.successMessage = page.locator('text=Order Placed Successfully');
    this.orderSummary = page.locator('text=Order Summary');
  }

  async goto() {
    await this.page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }

//   async addProductToCart() {
//     await this.productsLink.click();
//     await this.addToCartBtn.first().click();
//   }
async addProductToCart() {
  const products = this.page.locator('nav a[href="/products"]');

  await products.waitFor({ state: 'visible', timeout: 60000 });
  await products.click();

  // 🔥 WAIT for product cards to load
  await this.page.waitForSelector('a[href^="/products/"]', {
    timeout: 60000
  });

  // 🔥 WAIT for add-to-cart button
  const addBtn = this.page.locator('button[id^="add-to-cart-btn-1"]').first();

  await addBtn.waitFor({ state: 'visible', timeout: 60000 });

  await addBtn.click();
}

//   async goToCart() {
//     await this.cartLink.click();
//   }
async goToCart() {
  const cart = this.page.locator('a[href="/cart"]');

  await cart.waitFor({ state: 'visible', timeout: 60000 });

  await cart.scrollIntoViewIfNeeded();

  await cart.click();
}

  async proceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }
}