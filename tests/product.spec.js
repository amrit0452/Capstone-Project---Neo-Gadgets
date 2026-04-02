import { test, expect } from '@playwright/test';
import { ProductPage } from '../POM/productPage';

test.describe('Product Module - 25 Test Cases', () => {

  let productPage;

  test.beforeEach(async ({ page }) => {
    productPage = new ProductPage(page);
    await productPage.goto();
  });

  // ======================
  // BASIC UI TESTS
  // ======================

  test('TC01 - Verify product page loads', async ({ page }) => {
    await expect(page).toHaveURL(/products/);
  });


  test('TC03 - Verify search input visible', async () => {
    await expect(productPage.searchInput).toBeVisible();
  });

  test('TC04 - Verify category dropdown visible', async () => {
    await expect(productPage.categoryDropdown).toBeVisible();
  });

  test('TC05 - Verify product cards visible', async () => {
    await expect(productPage.productCards.first()).toBeVisible();
  });

  // ======================
  // SEARCH TESTS
  // ======================

  test('TC06 - Search valid product', async () => {
    await productPage.searchInput.fill('DJI');
    await expect(productPage.productCards.first()).toBeVisible();
  });

  test('TC07 - Search invalid product', async () => {
    await productPage.searchInput.fill('XYZ123');
    await expect(productPage.productCards).toHaveCount(0);
  });

  test('TC08 - Search empty input', async () => {
    await productPage.searchInput.fill('');
    await expect(productPage.productCards.first()).toBeVisible();
  });

  test('TC09 - Search with special characters', async () => {
    await productPage.searchInput.fill('@#$%');
    await expect(productPage.productCards).toHaveCount(0);
  });

  test('TC10 - Search with lowercase', async () => {
    await productPage.searchInput.fill('dji');
    await expect(productPage.productCards.first()).toBeVisible();
  });

  // ======================
  // FILTER TESTS
  // ======================

  test('TC11 - Filter by Drones', async () => {
    await productPage.categoryDropdown.selectOption('Drones');
    await expect(productPage.productCards.first()).toBeVisible();
  });


  test('TC13 - Filter All category', async () => {
    await productPage.categoryDropdown.selectOption('All');
    await expect(productPage.productCards.first()).toBeVisible();
  });

 

  // ======================
  // PRODUCT INTERACTION
  // ======================

  test('TC15 - Click first product', async ({ page }) => {
    await productPage.firstProduct.click();
    await expect(page).toHaveURL(/products\/1/);
  });

  test('TC16 - Click second product', async ({ page }) => {
    await productPage.secondProduct.click();
    await expect(page).toHaveURL(/products\/2/);
  });

  // ======================
  // ADD TO CART
  // ======================

  test('TC17 - Add first product to cart', async () => {
    await productPage.addToCartBtn1.click();
    await expect(productPage.addToCartBtn1).toBeVisible();
  });

  test('TC18 - Add second product to cart', async () => {
    await productPage.addToCartBtn2.click();
    await expect(productPage.addToCartBtn2).toBeVisible();
  });

  test('TC19 - Add multiple products to cart', async () => {
    await productPage.addToCartBtn1.click();
    await productPage.addToCartBtn2.click();
    await expect(productPage.addToCartBtn1).toBeVisible();
  });

  // ======================
  // NAVIGATION TESTS
  // ======================

  test('TC20 - Navigate to cart page', async ({ page }) => {
    await productPage.cartIcon.click();
    await expect(page).toHaveURL(/cart/);
  });

  test('TC21 - Navigate using Products link', async ({ page }) => {
    await productPage.productsLink.click();
    await expect(page).toHaveURL(/products/);
  });

  // ======================
  // EDGE CASES
  // ======================

  test('TC22 - Verify product count > 0', async () => {
    const count = await productPage.productCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC23 - Verify images loaded', async () => {
    const images = productPage.page.locator('img');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC24 - Rapid search input change', async () => {
    await productPage.searchInput.fill('DJ');
    await productPage.searchInput.fill('DJI Mini');
    await expect(productPage.productCards.first()).toBeVisible();
  });

  test('TC25 - Filter + Search combined', async () => {
    await productPage.categoryDropdown.selectOption('Drones');
    await productPage.searchInput.fill('DJI');
    await expect(productPage.productCards.first()).toBeVisible();
  });

});