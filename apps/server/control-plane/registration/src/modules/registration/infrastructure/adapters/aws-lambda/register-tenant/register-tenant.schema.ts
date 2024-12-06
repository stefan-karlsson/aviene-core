import { z } from 'zod';

export const registerTenantEventSchema = z.object({
  tenantName: z.string(),
  email: z.string().email(),
  tier: z.enum(['free', 'standard', 'enterprise', 'platinum']),
});
