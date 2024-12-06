import { ResponseBase } from '@aviene/framework';

/**
 * TODO: @stefan-karlsson - Make sure TypeScript transpiler ignores the following error for DTO's:
 * TODO: `Property tenantId has no initializer and is not definitely assigned in the constructor.`
 */

export class TenantResponse extends ResponseBase {
  tenantId!: string;
  tenantName!: string;
  email!: string;
  tier!: string;
  isActive!: boolean;
  tenantStatus!: string;
}
