import { ValueObject } from '@aviene/building-blocks';
import { ArgumentInvalidException, ArgumentNotProvidedException } from '@aviene/exceptions';
import { Guard } from '@aviene/guards';

interface EmailProps {
  address: string;
}

export class Email extends ValueObject<EmailProps> {
  private static emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  get address() {
    return this.props.address;
  }

  protected override validate(props: EmailProps): void {
    const { address } = props;

    if (Guard.isEmpty(address)) {
      throw new ArgumentNotProvidedException('The argument "address" is not provided');
    }

    if (!Email.emailRegex.test(address)) {
      // TODO: Make it possible to pass an object to the exception constructor, that way we don't have to pass optional values as undefined
      throw new ArgumentInvalidException(`The argument "address" is invalid`, undefined, {
        address,
      });
    }
  }
}
