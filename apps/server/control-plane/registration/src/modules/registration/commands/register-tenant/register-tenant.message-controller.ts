import type { CommandBus } from '@aviene/framework';
import { RegisterTenantCommand } from './register-tenant.command.js';
import type { RegisterTenantRequestDto } from './register-tenant.request-dto.js';

export class RegisterTenantMessageController {
  constructor(private readonly commandBus: CommandBus) {}

  async registerTenant(message: RegisterTenantRequestDto) {
    const command = new RegisterTenantCommand(message);

    this.commandBus.send(command);
  }
}
