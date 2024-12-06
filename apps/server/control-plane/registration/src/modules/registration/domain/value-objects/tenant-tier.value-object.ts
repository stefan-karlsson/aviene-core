import { ArgumentNotProvidedException, Guard, ValueObject } from '@aviene/framework';
import { TenantTierNotSupported } from '../registration.errors.js';

interface TenantTierProps {
  tierName: keyof typeof TenantTier.availableTiers;
}

export class TenantTier extends ValueObject<TenantTierProps> {
  static availableTiers = {
    free: 'free',
    basic: 'basic',
    premium: 'premium',
    enterprise: 'enterprise',
  } as const;

  static free = new TenantTier({ tierName: TenantTier.availableTiers.free });
  static basic = new TenantTier({ tierName: TenantTier.availableTiers.basic });
  static premium = new TenantTier({ tierName: TenantTier.availableTiers.premium });
  static enterprise = new TenantTier({ tierName: TenantTier.availableTiers.enterprise });

  get tierName() {
    return this.props.tierName;
  }

  static fromString(tierName: string) {
    const tier = TenantTier.availableTiers[tierName as keyof typeof TenantTier.availableTiers]; // TODO: @stefan-karlsson - Improve readability

    return new TenantTier({ tierName: tier });
  }

  protected override validate(props: TenantTierProps): void {
    const { tierName } = props;

    if (Guard.isEmpty(tierName)) {
      throw new ArgumentNotProvidedException('The argument "tierName" is not provided');
    }

    const supportedTiers = Object.keys(TenantTier.availableTiers);

    if (Guard.isNotIn(tierName, supportedTiers)) {
      throw new TenantTierNotSupported(
        `Provided "${tierName}" is not supported. Supported tiers: ${supportedTiers.join(', ')}`,
      );
    }
  }
}
