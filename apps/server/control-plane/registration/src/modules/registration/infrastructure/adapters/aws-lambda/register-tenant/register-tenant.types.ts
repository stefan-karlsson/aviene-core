import type { z } from 'zod';
import type { registerTenantEventSchema } from './register-tenant.schema.js';

export type RegisterTenantEvent = z.infer<typeof registerTenantEventSchema>;
