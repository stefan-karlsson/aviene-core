import { Command, type CommandProps } from '@aviene/framework';

export class RegisterTenantCommand extends Command {
  readonly tenantName: string;

  readonly email: string;

  readonly tier: string;

  constructor(props: CommandProps<RegisterTenantCommand>) {
    super(props);

    this.tenantName = props.tenantName;

    this.email = props.email;

    this.tier = props.tier;
  }
}
