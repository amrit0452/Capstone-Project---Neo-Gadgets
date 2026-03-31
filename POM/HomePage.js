import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;

    // Locators
    this.logo = page.locator('text=NEO GADGETS');
    this.homeMenu = page.locator('text=Home');
    this.productsMenu = page.locator('text=Products');
    this.loginBtn = page.locator('text=Log In');
    this.signupBtn = page.locator('text=Sign Up');

    this.heroTitle = page.locator('text=The Future Is Now');
    this.exploreBtn = page.locator('text=Explore Catalog');
    this.joinBtn = page.locator('text=Join Now');

    this.categorySection = page.locator('text=Shop by Category');
    this.featuredSection = page.locator('text=Featured Products');

    this.viewAll = page.locator('text=View All');

    this.categories = {
      drones: page.locator('text=Drones'),
      robotDogs: page.locator('text=Robot Dogs'),
      smartHome: page.locator('text=Smart Home'),
      wearables: page.locator('text=Wearables'),
      cameras: page.locator('text=Cameras'),
      audio: page.locator('text=Audio')
    };
  }

  async goto() {
    await this.page.goto('https://gadget-hub-central--amritrajconnect.replit.app/');
  }

  async clickExplore() {
    await this.exploreBtn.click();
  }

  async clickJoin() {
    await this.joinBtn.click();
  }

  async clickCategory(category) {
    await this.categories[category].click();
  }

  async verifyHomepageLoaded() {
    await expect(this.logo).toBeVisible();
    await expect(this.heroTitle).toBeVisible();
  }
}