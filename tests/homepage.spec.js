// import { test, expect } from '@playwright/test';
// import { HomePage } from '../POM/HomePage';

// test.describe('Neo Gadgets - Home Page Tests', () => {

//   test.beforeEach(async ({ page }) => {
//     await page.goto('https://gadget-hub-central--amritrajconnect.replit.app/');
//   });

//   test('Verify homepage loads successfully', async ({ page }) => {
//     await expect(page).toHaveTitle(/Neo Gadgets/);
//   });

//   test('Verify logo is visible', async ({ page }) => {
//     await expect(page.locator('text=NEO GADGETS')).toBeVisible();
//   });

//   test.skip('Verify navigation menu items', async ({ page }) => {
//     await expect(page.locator('text=Home')).toBeVisible();
//     await expect(page.locator('text=Products')).toBeVisible();
//   });

//   test('Verify Sign Up button visible', async ({ page }) => {
//     await expect(page.locator('text=Sign Up')).toBeVisible();
//   });

//   test('Verify Login button visible', async ({ page }) => {
//     await expect(page.locator('text=Log In')).toBeVisible();
//   });

//   test.skip('Verify hero section heading', async ({ page }) => {
//     await expect(page.locator('text=The Future Is Now')).toBeVisible();
//   });

//   test('Verify Explore Catalog button click', async ({ page }) => {
//     await page.click('text=Explore Catalog');
//     await expect(page).toHaveURL(/products/);
//   });

//   test('Verify Join Now button click', async ({ page }) => {
//     await page.click('text=Join Now');
//     await expect(page).toHaveURL(/register/);
//   });

//   test('Verify category section visible', async ({ page }) => {
//     await expect(page.locator('text=Shop by Category')).toBeVisible();
//   });

//   test.skip('Verify all categories present', async ({ page }) => {
//     const categories = ['Drones', 'Robot Dogs', 'Smart Home', 'Wearables', 'Cameras', 'Audio'];
//     for (let cat of categories) {
//       await expect(page.locator(`text=${cat}`)).toBeVisible();
//     }
//   });

//   test('Verify category click navigates', async ({ page }) => {
//     await page.click('text=Smart Home');
//     await expect(page).toHaveURL(/category/);
//   });

//   test('Verify featured products section', async ({ page }) => {
//     await expect(page.locator('text=Featured Products')).toBeVisible();
//   });

//   test('Verify View All link works', async ({ page }) => {
//     await page.click('text=View All');
//     await expect(page).toHaveURL(/products/);
//   });

//   test.skip('Verify product cards visible', async ({ page }) => {
//     const products = await page.locator('.product-card');
//     await expect(products.first()).toBeVisible();
//   });

//   test('Verify responsive layout (mobile view)', async ({ page }) => {
//     await page.setViewportSize({ width: 375, height: 812 });
//     await expect(page.locator('text=NEO GADGETS')).toBeVisible();
//   });

//   test('Verify page scroll', async ({ page }) => {
//     await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
//   });

//   test('Verify no broken images', async ({ page }) => {
//     const images = await page.locator('img').all();
//     for (const img of images) {
//       const src = await img.getAttribute('src');
//       expect(src).not.toBeNull();
//     }
//   });

// });