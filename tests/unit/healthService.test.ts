import { processHealthPayload } from '@/lib/services/healthService';

describe('processHealthPayload', () => {
  it('returns success payload', () => {
    const result = processHealthPayload({
      name: 'Kourosh',
      email: 'test@test.com',
    });

    expect(result).toEqual({
      success: true,
      data: {
        name: 'Kourosh',
        email: 'test@test.com',
      },
    });
  });
});