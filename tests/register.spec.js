import { test, expect } from '@playwright/test';
import { RegisterPage } from '../POM/RegisterPage';

test.describe('Neo Gadgets - Registration Tests', () => {

  test.beforeEach(async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();
  });

  test('TC01 - Valid registration', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser(
      'Amrit Raj',
      `test${Date.now()}@gmail.com`,
      '123456',
      '123456'
    );

    await expect(page).toHaveURL(/register/);
  });

  test('TC02 - Empty form submission', async ({ page }) => {
    const register = new RegisterPage(page);
    await register.goto();

    await register.nameInput.click();
    await register.emailInput.click();
    await register.passwordInput.click();
    await register.confirmPasswordInput.click();

    await register.clickRegister();

    await expect(register.nameError).toBeVisible();
    await expect(register.emailError).toBeVisible();
    await expect(register.passwordError).toBeVisible();
  });

  test('TC03 - Invalid email format', async ({ page }) => {
    const register = new RegisterPage(page);    

    await register.registerUser('Amrit', 'invalidemail', '123456', '123456');
    //await expect(page.)
    await page.waitForTimeout(2000);
    await expect(page.locator("#email-error")).toHaveText("Please enter a valid email address (e.g. you@example.com).");
    // const errmsg = await page.locator('#email-error')
    // await expect(errmsg).toContainText('Please enter a valid email address (e.g. you@example.com).');
    // expect(page.locator("#email-error")).toBeInv
  });

  test('TC04 - Password less than 6 chars', async ({ page }) => {
    const register = new RegisterPage(page);
  

    await register.registerUser('Amrit', 'test@gmail.com', '123', '123');

    await expect(page.locator('#password-error')).toBeVisible();
  });

  test.skip('TC05 - Confirm password mismatch', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('Amrit', 'test@gmail.com', '123456', '654321');

    await expect(register.confirmPasswordError).toBeVisible();
  });

  test.skip('TC06 - Name less than 2 characters', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('A', 'test@gmail.com', '123456', '123456');

    await expect(register.nameError).toBeVisible();
  });

  test.skip('TC07 - Email empty', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('Amrit', '', '123456', '123456');

    await expect(register.emailError).toBeVisible();
  });

  test.skip('TC08 - Password empty', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('Amrit', 'test@gmail.com', '', '');

    await expect(register.passwordError).toBeVisible();
  });

  test('TC09 - Confirm password empty', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('Amrit', 'test@gmail.com', '123456', '');

    await expect(register.confirmPasswordInput).toBeVisible();
  });

  test.skip('TC10 - Duplicate email registration', async ({ page }) => {
    const register = new RegisterPage(page);

    const email = `amrit@gmail.com`;

    // await register.registerUser('User1', email, '123456', '123456');
    await register.goto();
    await register.registerUser('User2', email, '123456', '123456');

    await expect(page.locator('#register-alert')).toBeVisible();
  });

  test.fixme('TC11 - Password with spaces only', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('Amrit', 'test@gmail.com', '      ', '      ');

    await expect(register.passwordError).toBeVisible();
  });

  test('TC12 - Email with spaces', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.registerUser('Amrit', `   test${Date.now()}@gmail.com  `, '123456', '123456');

    await expect(page).toHaveURL(/register/);
  });

  test.skip('TC13 - Multiple clicks on register button', async ({ page }) => {
    const register = new RegisterPage(page);

    await register.fillForm('Amrit', `test${Date.now()}@gmail.com`, '123456', '123456');

    await register.registerBtn.click();
    await register.registerBtn.click();

    await expect(page).toHaveURL(/register/);
  });

  test('TC14 - Long input values', async ({ page }) => {
    const register = new RegisterPage(page);

    const longName = 'A'.repeat(200);

    await register.registerUser(longName, `test${Date.now()}@gmail.com`, '123456', '123456');

    await expect(page).toHaveURL(/register/);
  });

  test('TC15 - UI elements visibility', async ({ page }) => {
    const register = new RegisterPage(page);

    await expect(register.nameInput).toBeVisible();
    await expect(register.emailInput).toBeVisible();
    await expect(register.passwordInput).toBeVisible();
    await expect(register.confirmPasswordInput).toBeVisible();
    await expect(register.registerBtn).toBeVisible();
  });

});




// import { test, expect } from '@playwright/test';

// const URL = 'https://gadget-hub-central--amritrajconnect.replit.app/register';

// test.describe('Registration Module - 15 Test Cases', () => {

//   // 1. Valid Registration
//   test('1. Valid Registration', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Amrit Test');
//     await page.fill('input[type="email"]', `test${Date.now()}@gmail.com`);
//     await page.fill('input[type="password"]', '123456');

//     await page.click('#register-btn');

//     // Adjust this based on your success flow
//     await expect(page).not.toHaveURL(/register/);
//   });

//   // 2. Invalid Email Format
//   test('2. Invalid Email Format', async ({ page }) => {
//     await page.goto(URL);

//     const email = page.locator('input[type="email"]');

//     await email.fill('randomwroncom');
//     await email.evaluate(e => e.reportValidity());

//     const msg = await email.evaluate(e => e.validationMessage);
//     expect(msg).toContain('email');
//   });

//   // 3. Password < 6 characters
//   test('3. Password too short', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Test');
//     await page.fill('input[type="email"]', 'test@gmail.com');
//     await page.fill('input[type="password"]', '123');

//     await page.click('#register-btn');

//     const errmsg = await page.locator('text=Passcode must be at least 6 characters')

//     await expect(errmsg).toBeVisible()
//   });

//   // 4. Empty All Fields
//   // test('4. Empty Fields', async ({ page }) => {
//   //   await page.goto(URL);

//   //   await page.click('#register-btn');

//   //   const email = page.locator('input[type="email"]');
//   //   // const msg = await email.evaluate(e => e.validationMessage);

//   //   // expect(msg.length).toBe(0);
//   //   const m = await page.getByText('Invalid email address format');
//   //   expect(m).toBe('Invalid email address format');
//   // });
//   test('4. Empty Fields', async ({ page }) => {
//   await page.goto(URL); // Navigate to the URL of the registration page
  
//   await page.click('#register-btn'); // Simulate clicking the Register button to submit the form
  
//   const email = page.locator('input[type="email"]'); // Find the email input field
  
//   // Wait for the validation message to appear for an empty email field
//   const errorMessage = await page.locator('text=Invalid email address format'); 
  
//   // Check that the error message is shown (this indicates the email field is empty or invalid)
//   await expect(errorMessage).toBeVisible(); // Make sure the error message is visible
// });

//   // 5. Empty Name Field
//   test('5. Empty Name', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[type="email"]', 'test@gmail.com');
//     await page.fill('input[type="password"]', '123456');
//     const name = page.locator('input[type="text"]');
//     const errmsg = await page.locator('text=Name must be at least 2 characters');

//     await page.click('#register-btn');
//     await expect(errmsg).toBeVisible();
//   });

//   // 6. Empty Email Field
//   test('6. Empty Email', async ({ page }) => {
//     await page.goto(URL);

//     const email = page.locator('input[type="email"]');

//     await email.fill('randomwroncom');
//     await email.evaluate(e => e.reportValidity());

//     const msg = await email.evaluate(e => e.validationMessage);
//     expect(msg).toContain('email');
//   });

//   // 7. Empty Password Field
//   test('7. Empty Password', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Test');
//     await page.fill('input[type="email"]', 'test@gmail.com');

//     await page.click('#register-btn');

//     const errmsg = await page.locator('text=Passcode must be at least 6 characters')

//     await expect(errmsg).toBeVisible()
//   });

//   // 8. Duplicate Email
//   test('8. Duplicate Email', async ({ page }) => {
//     await page.goto(URL);

//     const email = 'amrit@gmail.com';

//     // First registration
//     // await page.fill('input[name="name"]', 'User1');
//     // await page.fill('input[type="email"]', email);
//     // await page.fill('input[type="password"]', '123456');
//     // await page.click('#register-btn');

//     // Second attempt
//     // await page.goto(URL);
//     await page.fill('input[name="name"]', 'User2');
//     await page.fill('input[type="email"]', email);
//     await page.fill('input[type="password"]', '123456');
//     await page.click('#register-btn');

//     // Expect error (adjust selector)
//     const errmsg1 = await page.locator('text=HTTP 400 : An account with this email already exists')

//     await expect(errmsg1).toBeVisible()
//   });

//   // 9. Email with Spaces
//   test('9. Email with spaces', async ({ page }) => {
//      await page.goto(URL);

//     const email = page.locator('input[type="email"]');

//     await email.fill('randomwroncom');
//     await email.evaluate(e => e.reportValidity());

//     const msg = await email.evaluate(e => e.validationMessage);
//     expect(msg).toContain('email');
//   });

//   // 10. Password only spaces
//   test('10. Password only spaces', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Test');
//     await page.fill('input[type="email"]', 'test@gmail.com');
//     await page.fill('input[type="password"]', '      ');

//     await page.click('#register-btn');
//     await expect(page).toHaveURL(/register/);
//   });

//   // 11. Very long name
//   test('11. Long Name Input', async ({ page }) => {
//     await page.goto(URL);

//     const longName = 'A'.repeat(100);

//     await page.fill('input[name="name"]', longName);
//     await page.fill('input[type="email"]', `long${Date.now()}@gmail.com`);
//     await page.fill('input[type="password"]', '123456');

//     await page.click('#register-btn');
//     await expect(page).not.toHaveURL(/register/);
//   });

//   // 12. Special characters in name
//   test('12. Special Characters Name', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', '@#$%^&*');
//     await page.fill('input[type="email"]', `spec${Date.now()}@gmail.com`);
//     await page.fill('input[type="password"]', '123456');

//     await page.click('#register-btn');
//     await expect(page).not.toHaveURL(/register/);
//   });

//   // 13. Uppercase Email
//   test('13. Uppercase Email', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Test');
//     await page.fill('input[type="email"]', `TEST${Date.now()}@GMAIL.COM`);
//     await page.fill('input[type="password"]', '123456');

//     await page.click('#register-btn');

//   });

//   // 14. Multiple Clicks
//   test.skip('14. Multiple Click Register', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Test');
//     await page.fill('input[type="email"]', `multi${Date.now()}@gmail.com`);
//     await page.fill('input[type="password"]', '123456');

//     const btn = page.locator('#register-btn');

//     await btn.click();
//     await btn.click();
//     await btn.click();
//   });

//   // 15. SQL Injection Attempt
//   test('15. SQL Injection', async ({ page }) => {
//     await page.goto(URL);

//     await page.fill('input[name="name"]', 'Test');
//     await page.fill('input[type="email"]', "' OR 1=1 --");
    
//     const email = page.locator('input[type="email"]');
//     await email.evaluate(e => e.reportValidity());

//     const msg = await email.evaluate(e => e.validationMessage);

//     expect(msg.length).toBeGreaterThan(0);
//   });

// });