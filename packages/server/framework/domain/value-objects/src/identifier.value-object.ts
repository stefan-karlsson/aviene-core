import { type DomainPrimitive, ValueObject } from '@aviene/building-blocks';
import { ArgumentNotProvidedException } from '@aviene/exceptions';
import { Guard } from '@aviene/guards';

export class Identifier extends ValueObject<DomainPrimitive<string>> {
  get value() {
    return this.props.value;
  }

  protected override validate(props: DomainPrimitive<string>) {
    const { value } = props;

    if (Guard.isEmpty(value)) {
      throw new ArgumentNotProvidedException('The argument "value" is not provided');
    }
  }
}
