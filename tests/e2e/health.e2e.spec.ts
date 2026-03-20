import { test, expect } from '@playwright/test';

test('POST /api/health returns success for valid input', async ({ request }) => {
  const response = await request.post('/api/health', {
    data: {
      name: 'Kourosh',
      email: 'test@test.com',
    },
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body).toEqual({
    success: true,
    data: {
      name: 'Kourosh',
      email: 'test@test.com',
    },
  });
});

test('POST /api/health returns 400 for invalid input', async ({ request }) => {
  const response = await request.post('/api/health', {
    data: {
      name: '',
      email: 'bad-email',
    },
  });

  expect(response.status()).toBe(400);

  const body = await response.json();

  expect(body.success).toBe(false);
  expect(body.error).toBe('Invalid input');
});