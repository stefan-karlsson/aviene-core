import { RequestBase } from '@aviene/framework';

interface RegisterTenantRequestDtoProps {
  tenantName: string;
  email: string;
  tier: string;
}

export class RegisterTenantRequestDto extends RequestBase {
  readonly tenantName: string;
  readonly email: string;
  readonly tier: string;

  constructor(props: RegisterTenantRequestDtoProps) {
    super();

    this.tenantName = props.tenantName;
    this.email = props.email;
    this.tier = props.tier;
  }
}
