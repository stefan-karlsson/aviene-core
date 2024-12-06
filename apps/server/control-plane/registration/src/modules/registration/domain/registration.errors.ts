import { ExceptionBase } from '@aviene/framework';

abstract class RegistrationError extends ExceptionBase {}

export class TenantAlreadyExistsError extends RegistrationError {
  readonly code = 'REGISTRATION.TENANT_ALREADY_EXISTS';
}

export class TenantTierNotSupported extends RegistrationError {
  readonly code = 'REGISTRATION.TENANT_TIER_NOT_SUPPORTED';
}
