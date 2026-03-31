// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../POM/LoginPage';

// test.describe('Neo Gadgets - Login Tests', () => {

//   test.beforeEach(async ({ page }) => {
//     const login = new LoginPage(page);
//     await login.goto();
//   });

//   test('TC01 - Valid login', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('admin@gadgets.com', 'admin123');

//     await expect(page).toHaveURL(/email/);
//   });

//   test('TC02 - Empty form submission', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.loginBtn.click();

//     await expect(login.emailError).toBeVisible();
//     await expect(login.passwordError).toBeVisible();
//   });

//   test('TC03 - Empty email', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('', 'admin123');

//     await expect(login.emailError).toBeVisible();
//   });

//   test('TC04 - Empty password', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('admin@gadgets.com', '');

//     await expect(login.passwordError).toBeVisible();
//   });

//   test('TC05 - Invalid email format', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('invalidemail', 'admin123');

//     await expect(login.emailInput).toBeInvalid();
//   });

//   test('TC06 - Incorrect password', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('admin@gadgets.com', 'wrong123');

//     await expect(login.invalidCredsError).toBeVisible();
//   });

//   test('TC07 - Non-existing user', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('fake@gmail.com', '123456');

//     await expect(login.invalidCredsError).toBeVisible();
//   });

//   test('TC08 - Email with spaces', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('  admin@gadgets.com  ', 'admin123');

//     await expect(page).toHaveURL(/home|dashboard/);
//   });

//   test('TC09 - Password with spaces', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('admin@gadgets.com', '  admin123  ');

//     await expect(login.invalidCredsError).toBeVisible();
//   });

//   test('TC10 - Password less than required length', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('admin@gadgets.com', '123');

//     await expect(login.passwordInput).toBeInvalid();
//   });

//   test('TC11 - SQL injection attempt', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login("' OR 1=1 --", "' OR 1=1 --");

//     await expect(login.invalidCredsError).toBeVisible();
//   });

//   test('TC12 - XSS attempt', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('<script>alert(1)</script>', '123456');

//     await expect(login.invalidCredsError).toBeVisible();
//   });

//   test('TC13 - Multiple clicks on login button', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('admin@gadgets.com', 'admin123');
//     await login.loginBtn.click();

//     await expect(page).toHaveURL(/home|dashboard/);
//   });

//   test('TC14 - Verify login button visible', async ({ page }) => {
//     const login = new LoginPage(page);

//     await expect(login.loginBtn).toBeVisible();
//   });

//   test('TC15 - Verify email field visible', async ({ page }) => {
//     const login = new LoginPage(page);

//     await expect(login.emailInput).toBeVisible();
//   });

//   test('TC16 - Verify password field visible', async ({ page }) => {
//     const login = new LoginPage(page);

//     await expect(login.passwordInput).toBeVisible();
//   });

//   test('TC17 - Verify Sign up link', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.signupLink.click();

//     await expect(page).toHaveURL(/register/);
//   });

//   test('TC18 - Page refresh retains fields empty', async ({ page }) => {
//     const login = new LoginPage(page);

//     await page.reload();

//     await expect(login.emailInput).toHaveValue('');
//   });

//   test('TC19 - Press Enter to login', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.emailInput.fill('admin@gadgets.com');
//     await login.passwordInput.fill('admin123');
//     await page.keyboard.press('Enter');

//     await expect(page).toHaveURL(/home|dashboard/);
//   });

//   test('TC20 - Check error message disappears after valid input', async ({ page }) => {
//     const login = new LoginPage(page);

//     await login.login('', '');
//     await expect(login.emailError).toBeVisible();

//     await login.emailInput.fill('admin@gadgets.com');
//     await login.passwordInput.fill('admin123');

//     await expect(login.emailError).not.toBeVisible();
//   });

// });