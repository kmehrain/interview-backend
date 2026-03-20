import { z } from 'zod';

export const healthPostSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
});

export type HealthPostInput = z.infer<typeof healthPostSchema>;