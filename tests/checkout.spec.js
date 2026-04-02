// import { test, expect } from '@playwright/test';
// import { CheckoutPage } from '../POM/checkoutPage';

import { test, expect } from '@playwright/test';

test('Cash On Delivery', async ({ page }) => {
  await page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('profile@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('123456');
  await page.getByTestId('login-submit-btn').click();
// await page.locator('nav a[href="/products"]').click();

const products = page.locator('nav a[href="/products"]');

// await products.waitFor({ state: 'visible', timeout: 60000 });
await page.waitForTimeout(5000);
await products.click();
// await products.click();


  await page.locator('#add-to-cart-btn-1').click();
//   await page.getByRole('link', { name: '1', exact: true }).click();
await page.locator('a[href="/cart"]').click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByTestId('shippingAddress').click();
  await page.getByTestId('shippingAddress').fill('bangalore 560076');
  await page.locator('label').filter({ hasText: 'Cash on Delivery' }).click();
  await page.getByTestId('place-order-btn').click();
  await expect(page.getByRole('heading', { name: 'Order Placed Successfully!' })).toBeVisible();
});



test('PayPal Payment Method', async ({ page }) => {
  await page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('profile@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('123456');
  await page.getByTestId('login-submit-btn').click();
  const products = page.locator('nav a[href="/products"]');

// await products.waitFor({ state: 'visible', timeout: 60000 });
await page.waitForTimeout(5000);
await products.click();

  await page.getByTestId('add-to-cart-btn-2').click();
//   await page.getByRole('link', { name: '1', exact: true }).click();
await page.locator('a[href="/cart"]').click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByTestId('shippingAddress').click();
  await page.getByTestId('shippingAddress').fill('Bangalore 560098');
  await page.locator('label').filter({ hasText: 'PayPal' }).click();
  await page.getByTestId('place-order-btn').click();
   await expect(page.getByRole('heading', { name: 'Order Placed Successfully!' })).toBeVisible();
});



test('Credit Card Payment', async ({ page }) => {
  await page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('profile@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('123456');
  await page.getByTestId('login-submit-btn').click();

    const products = page.locator('nav a[href="/products"]');

// await products.waitFor({ state: 'visible', timeout: 60000 });
await page.waitForTimeout(5000);
await products.click();

  await page.getByTestId('add-to-cart-btn-3').click();
//   await page.getByRole('link', { name: '1', exact: true }).click();
await page.locator('a[href="/cart"]').click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByTestId('shippingAddress').click();
  await page.getByTestId('shippingAddress').fill('Bangalore 560076');
  await page.getByTestId('place-order-btn').click();
   await expect(page.getByRole('heading', { name: 'Order Placed Successfully!' })).toBeVisible();
});

test('Empty Cart', async ({ page }) => {
  await page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('profile@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('123456');
  await page.getByTestId('login-submit-btn').click();
  await page.waitForTimeout(5000);

  await page.locator('a[href="/cart"]').click();
  await page.waitForTimeout(5000);

  await expect(page.getByRole('heading', { name: 'Your cart is empty' })).toBeVisible();
});


test('Without Address', async ({ page }) => {
  await page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('profile@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('123456');
  await page.getByTestId('login-submit-btn').click();

      const products = page.locator('nav a[href="/products"]');

// await products.waitFor({ state: 'visible', timeout: 60000 });
await page.waitForTimeout(5000);
await products.click();

  await page.getByTestId('add-to-cart-btn-4').click();
//   await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('a[href="/cart"]').click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByTestId('place-order-btn').click();
  await expect(page.getByText('Please provide a complete')).toBeVisible;
});

test('Cash On Delivery another Testcase', async ({ page }) => {
  await page.goto('https://gadget-emporium--amritraushan243.replit.app/login');
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('profile@gmail.com');
  await page.getByTestId('password-input').click();
  await page.getByTestId('password-input').fill('123456');
  await page.getByTestId('login-submit-btn').click();
// await page.locator('nav a[href="/products"]').click();

const products = page.locator('nav a[href="/products"]');

// await products.waitFor({ state: 'visible', timeout: 60000 });
await page.waitForTimeout(5000);
await products.click();
// await products.click();


  await page.locator('#add-to-cart-btn-1').click();
//   await page.getByRole('link', { name: '1', exact: true }).click();
await page.locator('a[href="/cart"]').click();
  await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
  await page.getByTestId('shippingAddress').click();
  await page.getByTestId('shippingAddress').fill('bangalore 560076');
  await page.locator('label').filter({ hasText: 'Cash on Delivery' }).click();
  await page.getByTestId('place-order-btn').click();
  await expect(page.getByRole('heading', { name: 'Order Placed Successfully!' })).toBeVisible();
});




// test.describe('Checkout Module - 15 Test Cases', () => {

//   let checkoutPage;

//   test.beforeEach(async ({ page }) => {
//     checkoutPage = new CheckoutPage(page);

//     await checkoutPage.goto();
//     await checkoutPage.login('profile@gmail.com', '123456');

//     await checkoutPage.addProductToCart();
//     await checkoutPage.goToCart();
//     await checkoutPage.proceedToCheckout();
//   });

//   // ======================
//   // UI TESTS
//   // ======================

//   test('TC01 - Verify checkout page loads', async ({ page }) => {
//     await expect(page).toHaveURL(/checkout/);
//   });

//   test('TC02 - Verify shipping address field visible', async () => {
//     await expect(checkoutPage.shippingAddress).toBeVisible();
//   });

//   test('TC03 - Verify COD option visible', async () => {
//     await expect(checkoutPage.codOption).toBeVisible();
//   });

//   test('TC04 - Verify place order button visible', async () => {
//     await expect(checkoutPage.placeOrderBtn).toBeVisible();
//   });

//   test('TC05 - Verify order summary visible', async () => {
//     await expect(checkoutPage.orderSummary).toBeVisible();
//   });

//   // ======================
//   // FUNCTIONAL TESTS
//   // ======================

//   test('TC06 - Place order successfully', async () => {
//     await checkoutPage.shippingAddress.fill('Bangalore 560076');
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.successMessage).toBeVisible();
//   });

//   test('TC07 - Verify order success message', async () => {
//     await checkoutPage.shippingAddress.fill('Bangalore');
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.successMessage).toBeVisible();
//   });

//   // ======================
//   // NEGATIVE TESTS
//   // ======================

//   test('TC08 - Place order without address', async () => {
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPaippingAddress).toBeVisible();
//   });

//   test('TC09 - Place order without payment method', async () => {
//     await checkoutPage.shippingAddress.fill('Bangalore');
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.codOption).toBeVisible();
//   });

//   test('TC10 - Empty address input', async () => {
//     await checkoutPage.shippingAddress.fill('');
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.shippingAddress).toBeVisible();
//   });

//   // ======================
//   // EDGE CASES
//   // ======================

//   test('TC11 - Long address input', async () => {
//     const longAddress = 'A'.repeat(150);
//     await checkoutPage.shippingAddress.fill(longAddress);
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.placeOrderBtn).toBeVisible();
//   });

//   test('TC12 - Special characters in address', async () => {
//     await checkoutPage.shippingAddress.fill('@#$%^&* Bangalore');
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.placeOrderBtn).toBeVisible();
//   });

//   // ======================
//   // FLOW TESTS
//   // ======================

//   test('TC13 - Complete checkout flow', async () => {
//     await checkoutPage.shippingAddress.fill('Bangalore');
//     await checkoutPage.codOption.click();
//     await checkoutPage.placeOrderBtn.click();

//     await expect(checkoutPage.successMessage).toBeVisible();
//   });

//   test('TC14 - Navigate back to cart', async ({ page }) => {
//     await checkoutPage.goToCart();
//     await expect(page).toHaveURL(/cart/);
//   });

//   test('TC15 - Navigate to products page', async ({ page }) => {
//     await checkoutPage.productsLink.click();
//     await expect(page).toHaveURL(/products/);
//   });

// });