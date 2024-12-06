import { randomUUID } from 'node:crypto';
import { type AggregateId, AggregateRoot } from '@aviene/framework';
import type { CreateTenantRegistrationProps, TenantRegistrationProps } from './tenant-registration.types.js';
import { Tier } from './value-objects/tenant-tier.value-object.js';

export class TenantRegistrationEntity extends AggregateRoot<TenantRegistrationProps> {
  protected readonly _id: AggregateId;

  static create(create: CreateTenantRegistrationProps) {
    const id = randomUUID();

    const props: TenantRegistrationProps = { ...create, tier: create.tier ?? Tier.free };
    const tenantRegistration = new TenantRegistrationEntity({ id, props });
    /* adding "UserCreated" Domain Event that will be published
    eventually so an event handler somewhere may receive it and do an
    appropriate action. Multiple events can be added if needed. */
    tenantRegistration.addEvent(
      new TenantRegistrationCreatedDomainEvent({
        aggregateId: id,
        email: props.email,
      }),
    );

    return tenantRegistration;
  }

  validate() {
    // entity business rules validation to protect it's invariant before saving entity to a database
  }
}
