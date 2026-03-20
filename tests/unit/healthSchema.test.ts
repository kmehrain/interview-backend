import { healthPostSchema } from '@/lib/validation/healthSchema';

describe('healthPostSchema', () => {
  it('accepts valid input', () => {
    const result = healthPostSchema.safeParse({
      name: 'Kourosh',
      email: 'test@test.com',
    });

    expect(result.success).toBe(true);
  });

  it('rejects empty name', () => {
    const result = healthPostSchema.safeParse({
      name: '',
      email: 'test@test.com',
    });

    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = healthPostSchema.safeParse({
      name: 'Kourosh',
      email: 'bad-email',
    });

    expect(result.success).toBe(false);
  });
});