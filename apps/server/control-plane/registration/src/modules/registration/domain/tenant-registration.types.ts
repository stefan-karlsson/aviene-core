import type { Email, Identifier } from '@aviene/framework';
import type { TenantTier } from './value-objects/tenant-tier.value-object.js';

export interface TenantRegistrationProps {
  tenantId: Identifier;
  tenantName: string;
  email: Email;
  tier: TenantTier;
  status: string;
}

export interface CreateTenantRegistrationProps {
  tenantName: string;
  email: string;
  tier: TenantTier;
}
