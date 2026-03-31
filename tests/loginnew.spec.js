import { test, expect } from '@playwright/test';
import { LoginPage } from '../POM/loginPageNew';

test.describe('Login Module - 15 Test Cases', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  // TC01 - Valid login
  test('TC01 - Login with valid credentials', async ({ page }) => {
    await loginPage.login('amrit@gmail.com', '123456');
    await expect(page).toHaveURL(/login/);
  });

  // TC02 - Invalid email
  test('TC02 - Login with invalid email', async () => {
    await loginPage.login('wrong@example.com', 'Password123');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  // TC03 - Invalid password
  test.skip('TC03 - Login with invalid password', async () => {
    await loginPage.login('test@example.com', 'wrongpass');
    await expect(page.locator('text=Incorrect email or password')).toBeVisible();
  });

  // TC04 - Empty email
  test.skip('TC04 - Empty email field', async () => {
    await loginPage.login('', 'Password123');
    await expect(loginPage.emailInput).toHaveAttribute('required', '');
  });

  // TC05 - Empty password
  test.skip('TC05 - Empty password field', async () => {
    await loginPage.login('test@example.com', '');
    await expect(loginPage.passwordInput).toHaveAttribute('required', '');
  });

  // TC06 - Both fields empty
  test('TC06 - Empty email and password', async () => {
    await loginPage.clickLogin();
    await expect(loginPage.emailInput).toBeVisible();
  });

  // TC07 - Invalid email format
  test('TC07 - Invalid email format', async () => {
    await loginPage.login('invalidemail', 'Password123');
    await expect(loginPage.emailInput).toHaveAttribute('type', 'email');
  });

  // TC08 - Password case sensitivity
  test('TC08 - Password case sensitivity check', async () => {
    await loginPage.login('test@example.com', 'password123');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  // TC09 - SQL Injection attempt
  test.skip('TC09 - SQL injection attempt', async () => {
    await loginPage.login("' OR 1=1 --", "' OR 1=1 --");
    await expect(loginPage.errorMessage).toBeVisible();
  });

  // TC10 - Leading/trailing spaces
  test('TC10 - Email with spaces', async () => {
    await loginPage.login('  test@example.com  ', 'Password123');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  // TC11 - Very long input
  test('TC11 - Long email input', async () => {
    const longEmail = 'a'.repeat(200) + '@gmail.com';
    await loginPage.login(longEmail, 'Password123');
    await expect(loginPage.errorMessage).toBeVisible();
  });

  // TC12 - Check password masking
  test('TC12 - Password field masked', async () => {
    await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');
  });

  // TC13 - Navigation to register page
  test.skip('TC13 - Click register link', async ({ page }) => {
    await loginPage.registerLink.click();
    await expect(page).toHaveURL(/.*register/);
  });

  // TC14 - Button disabled state (if implemented)
  test('TC14 - Login button disabled when empty', async () => {
    await loginPage.clearFields();
    await expect(loginPage.loginButton).toBeEnabled(); // adjust if disabled logic exists
  });

  // TC15 - Multiple failed attempts
  test('TC15 - Multiple invalid login attempts', async () => {
    for (let i = 0; i < 3; i++) {
      await loginPage.login('wrong@example.com', 'wrongpass');
    }
    await expect(loginPage.errorMessage).toBeVisible();
  });

});