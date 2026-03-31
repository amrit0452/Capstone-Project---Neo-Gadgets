import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/homePageNew';

test.describe('Home Page - 25 Test Cases', () => {

  let homePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  // EASY TEST CASES

  test.skip('TC01 - Verify home page loads', async ({ page }) => {
    await expect(page).toHaveURL('/');
  });

  test.skip('TC02 - Verify logo is visible', async () => {
    await expect(homePage.homeLink).toBeVisible();
  });

  test.skip('TC03 - Verify Products link is visible', async () => {
    await expect(homePage.productsLink).toBeVisible();
  });

  test('TC04 - Verify Login link is visible', async () => {
    await expect(homePage.loginLink).toBeVisible();
  });

  test('TC05 - Verify Register link is visible', async () => {
    await expect(homePage.registerLink).toBeVisible();
  });

  test('TC06 - Verify cart icon is visible', async () => {
    await expect(homePage.cartIcon).toBeVisible();
  });

  test('TC07 - Verify Shop Collection button visible', async () => {
    await expect(homePage.shopNowBtn).toBeVisible();
  });

  test('TC08 - Verify Explore Drones button visible', async () => {
    await expect(homePage.exploreDronesBtn).toBeVisible();
  });

  test('TC09 - Verify product cards are displayed', async () => {
    await expect(homePage.productCards.first()).toBeVisible();
  });

   test.skip('TC10 - Verify footer text visible', async () => {
    await expect(homePage.footerText).toBeVisible();
  });


  // ADVANCED TEST CASES

  test.skip('TC11 - Click Products link navigates correctly', async ({ page }) => {
    await homePage.productsLink.click();
    await expect(page).toHaveURL(/products/);
  });

  test('TC12 - Click Login navigates to login page', async ({ page }) => {
    await homePage.loginLink.click();
    await expect(page).toHaveURL(/login/);
  });

  test('TC13 - Click Register navigates to register page', async ({ page }) => {
    await homePage.registerLink.click();
    await expect(page).toHaveURL(/register/);
  });

  test('TC14 - Click cart icon navigates to cart page', async ({ page }) => {
    await homePage.cartIcon.click();
    await expect(page).toHaveURL(/cart/);
  });

  test('TC15 - Click Shop Collection button', async ({ page }) => {
    await homePage.shopNowBtn.click();
    await expect(page).toHaveURL(/products/);
  });

  test('TC16 - Click Explore Drones button', async ({ page }) => {
    await homePage.exploreDronesBtn.click();
    await expect(page).toHaveURL(/category=Drones/);
  });

  test('TC17 - Click first product navigates to product page', async ({ page }) => {
    await homePage.firstProduct.click();
    await expect(page).toHaveURL(/products\/1/);
  });

  test('TC18 - Click second product navigates correctly', async ({ page }) => {
    await homePage.secondProduct.click();
    await expect(page).toHaveURL(/products\/2/);
  });

  test.skip('TC19 - Verify multiple product cards count', async () => {
    const count = await homePage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC20 - Verify images are loaded', async () => {
    const images = homePage.page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test.skip('TC21 - Verify page responsiveness (mobile)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(homePage.homeLink).toBeVisible();
  });

  test('TC22 - Verify hover effect on product', async () => {
    const product = homePage.productCards.first();
    await product.hover();
    await expect(product).toBeVisible();
  });

  test('TC23 - Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Cool Gadgets Store/);
  });

  test.skip('TC24 - Verify navigation back to home', async ({ page }) => {
    await homePage.productsLink.click();
    await homePage.homeLink.click();
    await expect(page).toHaveURL('/');
  });

  test('TC25 - Verify no broken links (basic)', async ({ page }) => {
    const links = page.locator('a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');
      expect(href).not.toBeNull();
    }
  });

});

 