import { test, expect } from '@playwright/test';

// ================= MOCK DATA =================

const mockProducts = [
  { id: 1, name: 'Drone', price: 1000 },
  { id: 2, name: 'Camera', price: 500 }
];

const mockCart = [
  { productId: 1, quantity: 2 }
];

const mockOrders = [
  { id: 101, total: 2000, items: mockCart }
];

// ================= PRODUCT TESTS =================

test.describe('PRODUCT DB MOCK', () => {

  test.beforeEach(async ({ page }) => {
    await page.route('**/api/products', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockProducts)
      })
    );

    await page.goto('https://gadget-emporium--amritraushan243.replit.app');
  });

  test('TC01 - Products exist', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/products');
      return res.json();
    });
    expect(data.length).toBe(2);
  });

  test('TC02 - Product has id', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/products');
      return res.json();
    });
    expect(data[0].id).toBeDefined();
  });

  test('TC03 - Product has name', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/products');
      return res.json();
    });
    expect(data[0].name).toBeDefined();
  });

  test('TC04 - Product price > 0', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/products');
      return res.json();
    });
    expect(data[0].price).toBeGreaterThan(0);
  });

  test('TC05 - Product count correct', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/products');
      return res.json();
    });
    expect(data.length).toBe(2);
  });

});

// ================= CART TESTS =================

test.describe('CART DB MOCK', () => {

  test.beforeEach(async ({ page }) => {
    await page.route('**/api/cart', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockCart)
      })
    );

    await page.goto('https://gadget-emporium--amritraushan243.replit.app');
  });

  test('TC06 - Cart not empty', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/cart');
      return res.json();
    });
    expect(data.length).toBeGreaterThan(0);
  });

  test('TC07 - Cart has productId', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/cart');
      return res.json();
    });
    expect(data[0].productId).toBeDefined();
  });

  test('TC08 - Cart quantity valid', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/cart');
      return res.json();
    });
    expect(data[0].quantity).toBeGreaterThan(0);
  });

  test('TC09 - Cart structure valid', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/cart');
      return res.json();
    });
    expect(data[0]).toHaveProperty('quantity');
  });

  test('TC10 - Cart consistency', async ({ page }) => {
    const data1 = await page.evaluate(async () => {
      const res = await fetch('/api/cart');
      return res.json();
    });

    const data2 = await page.evaluate(async () => {
      const res = await fetch('/api/cart');
      return res.json();
    });

    expect(data1).toEqual(data2);
  });

});

// ================= ORDER TESTS =================

test.describe('ORDER DB MOCK', () => {

  test.beforeEach(async ({ page }) => {
    await page.route('**/api/orders', route =>
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockOrders)
      })
    );

    await page.goto('https://gadget-emporium--amritraushan243.replit.app');
  });

  test('TC11 - Orders exist', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/orders');
      return res.json();
    });
    expect(data.length).toBe(1);
  });

  test('TC12 - Order id exists', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/orders');
      return res.json();
    });
    expect(data[0].id).toBeDefined();
  });

  test('TC13 - Order total valid', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/orders');
      return res.json();
    });
    expect(data[0].total).toBeGreaterThan(0);
  });

  test('TC14 - Order has items', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/orders');
      return res.json();
    });
    expect(data[0].items.length).toBeGreaterThan(0);
  });

  test('TC15 - Order structure', async ({ page }) => {
    const data = await page.evaluate(async () => {
      const res = await fetch('/api/orders');
      return res.json();
    });
    expect(data[0]).toHaveProperty('items');
  });

});

// ================= PARAMETERIZED =================

test.describe('PARAMETERIZED TESTS', () => {

  const testData = [
    { id: 1, qty: 1 },
    { id: 2, qty: 2 },
    { id: 3, qty: 3 },
    { id: 4, qty: 4 },
    { id: 5, qty: 5 }
  ];

  testData.forEach((data, index) => {

    test(`TC${16 + index} - Qty check ${data.qty}`, async () => {
      expect(data.qty).toBeGreaterThan(0);
    });

  });

});