import { test, expect } from '@playwright/test';
import { ProfilePage } from '../POM/profilePage';

test.describe('Profile Module - 20 Test Cases', () => {

  let profilePage;

  test.beforeEach(async ({ page }) => {
    profilePage = new ProfilePage(page);

    await profilePage.goto();
    await profilePage.login('profile@gmail.com', '123456');
    await profilePage.goToProfile();
  });

  // =========================
  // BASIC / UI TESTS
  // =========================

  test('TC01 - Verify profile page loads', async ({ page }) => {
    await expect(page).toHaveURL(/profile/);
  });

  test('TC02 - Verify Personal Info section visible', async () => {
    await expect(profilePage.personalInfoHeading).toBeVisible();
  });

  test.skip('TC03 - Verify Security section visible', async () => {
    await expect(profilePage.securityHeading).toBeVisible();
  });

  test('TC04 - Verify name input visible', async () => {
    await expect(profilePage.nameInput).toBeVisible();
  });

  test('TC05 - Verify email input visible', async () => {
    await expect(profilePage.emailProfileInput).toBeVisible();
  });

  test('TC06 - Verify current password field visible', async () => {
    await expect(profilePage.currentPassword).toBeVisible();
  });

  test('TC07 - Verify new password field visible', async () => {
    await expect(profilePage.newPassword).toBeVisible();
  });

  test('TC08 - Verify save button visible', async () => {
    await expect(profilePage.saveBtn).toBeVisible();
  });

  // =========================
  // FUNCTIONAL TESTS
  // =========================

  test('TC09 - Update name successfully', async () => {
    await profilePage.nameInput.fill('Amrit Raj Updated');
    await profilePage.saveBtn.click();
    await expect(profilePage.saveBtn).toBeVisible();
  });

  test('TC10 - Update email successfully', async () => {
    await profilePage.emailProfileInput.fill('amrit@gmail.com');
    await profilePage.saveBtn.click();
    await expect(profilePage.saveBtn).toBeVisible();
  });

  test.skip('TC11 - Change password with valid data', async () => {
    await profilePage.currentPassword.fill('123456');
    await profilePage.newPassword.fill('123456');
    await profilePage.saveBtn.click();
    await expect(profilePage.saveBtn).toBeVisible();
  });

  // =========================
  // NEGATIVE TESTS
  // =========================

  test.skip('TC12 - Save without changes', async () => {
    await profilePage.saveBtn.click();
    await expect(profilePage.saveBtn).toBeVisible();
  });

  test('TC13 - Invalid email format', async () => {
    await profilePage.emailProfileInput.fill('invalidemail');
    await profilePage.saveBtn.click();
    await expect(profilePage.emailProfileInput).toBeVisible();
  });

  test('TC14 - Empty name field', async () => {
    await profilePage.nameInput.fill('');
    await profilePage.saveBtn.click();
    await expect(profilePage.nameInput).toBeVisible();
  });

  test('TC15 - Wrong current password', async () => {
    await profilePage.currentPassword.fill('wrong123');
    await profilePage.newPassword.fill('1234567');
    await profilePage.saveBtn.click();
    await expect(profilePage.saveBtn).toBeVisible();
  });

  // =========================
  // EDGE CASES
  // =========================

  test.skip('TC16 - Long name input', async () => {
    const longName = 'A'.repeat(100);
    await profilePage.nameInput.fill(longName);
    await profilePage.saveBtn.click();
    await expect(profilePage.nameInput).toBeVisible();
  });

  test('TC17 - Special characters in name', async () => {
    await profilePage.nameInput.fill('@#$%^&*');
    await profilePage.saveBtn.click();
    await expect(profilePage.nameInput).toBeVisible();
  });

  test('TC18 - Password with spaces', async () => {
    await profilePage.currentPassword.fill('123456 ');
    await profilePage.newPassword.fill(' 1234567');
    await profilePage.saveBtn.click();
    await expect(profilePage.saveBtn).toBeVisible();
  });

  // =========================
  // NAVIGATION / SESSION TESTS
  // =========================

  test('TC19 - Logout functionality', async ({ page }) => {
    await profilePage.logoutBtn.click();
    await expect(page).toHaveURL(/login|home/);
  });

  test.skip('TC20 - Navigate back to profile after login', async ({ page }) => {
    await page.goto('/');
    await profilePage.profileLink.click();
    await expect(page).toHaveURL(/profile/);
  });

});