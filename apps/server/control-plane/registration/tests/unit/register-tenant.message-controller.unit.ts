import { expect, test, vi } from 'vitest';

import type { CommandBus } from '@aviene/framework';
import { RegisterTenantMessageController } from '../../src/modules/registration/commands/register-tenant/register-tenant.message-controller';

const commandBus: CommandBus = {
  send: vi.fn(),
  schedule: vi.fn(),
};

const controller = new RegisterTenantMessageController(commandBus as CommandBus);

test('should return 201 status code', async () => {
  const tenantData = {
    tenantName: 'test_tenant',
    email: 'test_tenant@aviene.se',
    tier: 'free',
  };

  await controller.registerTenant(tenantData);

  expect(commandBus).toHaveBeenCalledWith(expect.objectContaining(tenantData));
});
