import type { HealthPostInput } from '@/lib/validation/healthSchema';

export function processHealthPayload(input: HealthPostInput) {
  return {
    success: true,
    data: input,
  };
}