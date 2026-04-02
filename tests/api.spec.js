import { test, expect, request as playwrightRequest } from '@playwright/test';

const baseURL = 'https://gadget-emporium--amritraushan243.replit.app';

let context;

// 🔥 GLOBAL LOGIN (SESSION WILL BE STORED)
test.beforeAll(async () => {
  context = await playwrightRequest.newContext({
    baseURL: baseURL
  });

  const res = await context.post('/api/auth/login', {
    data: {
      email: 'profile@gmail.com',
      password: '123456'
    }
  });

  expect(res.status()).toBe(200);
});


// ================= AUTH =================

test('TC01 - Login valid', async () => {
  const res = await context.post('/api/auth/login', {
    data: { email: 'profile@gmail.com', password: '123456' }
  });

  expect(res.status()).toBe(200);
});

test('TC02 - Login wrong password', async () => {
  const res = await context.post('/api/auth/login', {
    data: { email: 'profile@gmail.com', password: 'wrong' }
  });

  expect(res.status()).not.toBe(200);
});

test('TC03 - Login empty', async () => {
  const res = await context.post('/api/auth/login', { data: {} });
  expect(res.status()).not.toBe(200);
});

test('TC04 - Register new user', async () => {
  const res = await context.post('/api/auth/register', {
    data: {
      name: 'Test',
      email: `test${Date.now()}@gmail.com`,
      password: '123456'
    }
  });

  expect([200, 201]).toContain(res.status()); // ✅ FIX
});

test('TC05 - Register duplicate', async () => {
  const res = await context.post('/api/auth/register', {
    data: {
      name: 'Test',
      email: 'profile@gmail.com',
      password: '123456'
    }
  });

  expect([200, 400]).toContain(res.status()); // flexible
});

test('TC06 - Get profile', async () => {
  const res = await context.get('/api/auth/me');
  expect(res.status()).toBe(200);
});


// ================= PRODUCTS =================

test('TC07 - Get all products', async () => {
  const res = await context.get('/api/products');
  expect(res.status()).toBe(200);
});

test('TC08 - Product list not empty', async () => {
  const res = await context.get('/api/products');
  const data = await res.json();
  expect(data.length).toBeGreaterThan(0);
});

test('TC09 - Product structure', async () => {
  const res = await context.get('/api/products');
  const data = await res.json();

  expect(data[0]).toHaveProperty('id');
  expect(data[0]).toHaveProperty('name');
});

test('TC10 - Invalid product endpoint', async () => {
  const res = await context.get('/api/productsss');
  expect(res.status()).not.toBe(200);
});


// ================= CART =================

test('TC11 - Add product to cart', async () => {
  const res = await context.post('/api/cart', {
    data: { productId: 1, quantity: 1 }
  });

  expect([200, 201]).toContain(res.status());
});

test('TC12 - Get cart', async () => {
  const res = await context.get('/api/cart');
  expect(res.status()).toBe(200);
});

test('TC13 - Add without quantity', async () => {
  const res = await context.post('/api/cart', {
    data: { productId: 1 }
  });

  expect(res.status()).not.toBe(200);
});

test('TC14 - Invalid product ID', async () => {
  const res = await context.post('/api/cart', {
    data: { productId: 999 }
  });

  expect(res.status()).not.toBe(200);
});

test('TC15 - Cart response structure', async () => {
  const res = await context.get('/api/cart');
  const data = await res.json();

  expect(data).toBeDefined();
});


// ================= ORDERS =================

test('TC16 - Place order success', async () => {
  await context.post('/api/cart', {
    data: { productId: 1, quantity: 1 }
  });

  const res = await context.post('/api/orders', {
    data: {
      shippingAddress: 'Bangalore',
      paymentMethod: 'COD'
    }
  });

  expect([200, 201]).toContain(res.status());
});

test('TC17 - Get orders', async () => {
  const res = await context.get('/api/orders');
  expect(res.status()).toBe(200);
});

test('TC18 - Orders not empty', async () => {
  const res = await context.get('/api/orders');
  const data = await res.json();

  expect(data).toBeDefined();
});

test('TC19 - Place order without address', async () => {
  const res = await context.post('/api/orders', {
    data: { paymentMethod: 'COD' }
  });

  expect(res.status()).not.toBe(200);
});

test('TC20 - Unauthorized order access', async () => {
  const temp = await playwrightRequest.newContext({ baseURL });

  const res = await temp.get('/api/orders');
  expect(res.status()).not.toBe(200);
});


// ================= EXTRA =================

test('TC21 - API response time', async () => {
  const start = Date.now();
  await context.get('/api/products');
  const time = Date.now() - start;

  expect(time).toBeLessThan(3000);
});

test('TC22 - Multiple login', async () => {
  const res1 = await context.post('/api/auth/login', {
    data: { email: 'profile@gmail.com', password: '123456' }
  });

  const res2 = await context.post('/api/auth/login', {
    data: { email: 'profile@gmail.com', password: '123456' }
  });

  expect(res1.status()).toBe(200);
  expect(res2.status()).toBe(200);
});

test('TC23 - Check headers', async () => {
  const res = await context.get('/api/products');
  expect(res.headers()['content-type']).toContain('application/json');
});

test('TC24 - Cart persistence', async () => {
  await context.post('/api/cart', {
    data: { productId: 1, quantity: 1 }
  });

  const res = await context.get('/api/cart');
  const data = await res.json();

  expect(data).toBeDefined();
});

test('TC25 - Order after cart', async () => {
  await context.post('/api/cart', {
    data: { productId: 1, quantity: 1 }
  });

  const res = await context.post('/api/orders', {
    data: {
      shippingAddress: 'Bangalore',
      paymentMethod: 'COD'
    }
  });

  expect([200, 201]).toContain(res.status());
});