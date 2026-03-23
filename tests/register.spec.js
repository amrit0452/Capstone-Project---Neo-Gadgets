import { test, expect } from '@playwright/test';

const URL = 'https://gadget-hub-central--amritrajconnect.replit.app/register';

test.describe('Registration Module - 15 Test Cases', () => {

  // 1. Valid Registration
  test('1. Valid Registration', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Amrit Test');
    await page.fill('input[type="email"]', `test${Date.now()}@gmail.com`);
    await page.fill('input[type="password"]', '123456');

    await page.click('#register-btn');

    // Adjust this based on your success flow
    await expect(page).not.toHaveURL(/register/);
  });

  // 2. Invalid Email Format
  test.skip('2. Invalid Email Format', async ({ page }) => {
    await page.goto(URL);

    const email = page.locator('input[type="email"]');

    await email.fill('randomwron@gmail.com');
    await email.evaluate(e => e.reportValidity());

    const msg = await email.evaluate(e => e.validationMessage);
    expect(msg).toContain('@');
  });

  // 3. Password < 6 characters
  test.skip('3. Password too short', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="email"]', 'test@gmail.com');
    await page.fill('input[type="password"]', '123');

    await page.click('#register-btn');

    // You should add custom validation for this in UI
  });

  // 4. Empty All Fields
  test.skip('4. Empty Fields', async ({ page }) => {
    await page.goto(URL);

    await page.click('button');

    const email = page.locator('input[type="email"]');
    const msg = await email.evaluate(e => e.validationMessage);

    expect(msg.length).toBeGreaterThan(0);
  });

  // 5. Empty Name Field
  test.skip('5. Empty Name', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[type="email"]', 'test@gmail.com');
    await page.fill('input[type="password"]', '123456');

    await page.click('button');
  });

  // 6. Empty Email Field
  test.skip('6. Empty Email', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="password"]', '123456');

    await page.click('button');

    const email = page.locator('input[type="email"]');
    const msg = await email.evaluate(e => e.validationMessage);

    expect(msg.length).toBeGreaterThan(0);
  });

  // 7. Empty Password Field
  test.skip('7. Empty Password', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="email"]', 'test@gmail.com');

    await page.click('button');
  });

  // 8. Duplicate Email
  test.skip('8. Duplicate Email', async ({ page }) => {
    await page.goto(URL);

    const email = `dup${Date.now()}@gmail.com`;

    // First registration
    await page.fill('input[name="name"]', 'User1');
    await page.fill('input[type="email"]', email);
    await page.fill('input[type="password"]', '123456');
    await page.click('button');

    // Second attempt
    await page.goto(URL);
    await page.fill('input[name="name"]', 'User2');
    await page.fill('input[type="email"]', email);
    await page.fill('input[type="password"]', '123456');
    await page.click('button');

    // Expect error (adjust selector)
  });

  // 9. Email with Spaces
  test.skip('9. Email with spaces', async ({ page }) => {
    await page.goto(URL);

    const email = page.locator('input[type="email"]');
    await email.fill(' test@gmail.com ');
    await email.evaluate(e => e.reportValidity());

    const msg = await email.evaluate(e => e.validationMessage);
    expect(msg.length).toBeGreaterThan(0);
  });

  // 10. Password only spaces
  test.skip('10. Password only spaces', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="email"]', 'test@gmail.com');
    await page.fill('input[type="password"]', '      ');

    await page.click('button');
  });

  // 11. Very long name
  test.skip('11. Long Name Input', async ({ page }) => {
    await page.goto(URL);

    const longName = 'A'.repeat(200);

    await page.fill('input[name="name"]', longName);
    await page.fill('input[type="email"]', `long${Date.now()}@gmail.com`);
    await page.fill('input[type="password"]', '123456');

    await page.click('button');
  });

  // 12. Special characters in name
  test.skip('12. Special Characters Name', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', '@#$%^&*');
    await page.fill('input[type="email"]', `spec${Date.now()}@gmail.com`);
    await page.fill('input[type="password"]', '123456');

    await page.click('button');
  });

  // 13. Uppercase Email
  test.skip('13. Uppercase Email', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="email"]', `TEST${Date.now()}@GMAIL.COM`);
    await page.fill('input[type="password"]', '123456');

    await page.click('button');
  });

  // 14. Multiple Clicks
  test.skip('14. Multiple Click Register', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="email"]', `multi${Date.now()}@gmail.com`);
    await page.fill('input[type="password"]', '123456');

    const btn = page.locator('button');

    await btn.click();
    await btn.click();
    await btn.click();
  });

  // 15. SQL Injection Attempt
  test('15. SQL Injection', async ({ page }) => {
    await page.goto(URL);

    await page.fill('input[name="name"]', 'Test');
    await page.fill('input[type="email"]', "' OR 1=1 --");
    
    const email = page.locator('input[type="email"]');
    await email.evaluate(e => e.reportValidity());

    const msg = await email.evaluate(e => e.validationMessage);

    expect(msg.length).toBeGreaterThan(0);
  });

});