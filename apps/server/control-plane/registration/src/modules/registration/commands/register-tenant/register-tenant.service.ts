import { type AggregateId, type CommandHandler, ConflictException, Err, Ok, type Result } from '@aviene/framework';
import { TenantAlreadyExistsError } from '../../domain/registration.errors.js';
import { TenantRegistrationEntity } from '../../domain/tenant-registration.entity.js';
import { TenantTier } from '../../domain/value-objects/tenant-tier.value-object.js';
import type { RegisterTenantCommand } from './register-tenant.command.js';

interface RegisterTenantServiceConfig {
  tenantRegistrationRepo: TenantRegistrationRepositoryPort;
}

export class RegisterTenantService implements CommandHandler {
  constructor(protected readonly config: RegisterTenantServiceConfig) {}

  async execute(command: RegisterTenantCommand): Promise<Result<AggregateId, TenantAlreadyExistsError>> {
    const { tenantName, email, tier } = command;

    const tenantTier = TenantTier.fromString(tier);

    const tenantRegistration = TenantRegistrationEntity.create({
      tenantName,
      email,
      tier: tenantTier,
    });

    try {
      await this.tenantRegistrationRepo.transaction(async () => {
        return this.tenantRegistrationRepo.insert(tenantRegistration);
      });

      return Ok(tenantRegistration.id);
    } catch (error) {
      if (error instanceof ConflictException) {
        return Err(new TenantAlreadyExistsError(error));
      }

      throw error;
    }
  }
}
