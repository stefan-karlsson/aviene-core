import { beforeEach, describe, expect, it } from 'vitest';
import type { EventHandler } from '../../src/event/event.handler.js';
import { event, getInMemoryMessageBus } from '../../src/index.js';

describe('InMemoryMessageBus', () => {
  let messageBus: ReturnType<typeof getInMemoryMessageBus>;

  beforeEach(() => {
    messageBus = getInMemoryMessageBus();
  });

  it('should be able to subscribe to published events', async () => {
    const myEvent = event('GuestCheckedIn', { guestId: '123' }, { correlationId: '321' });

    const handleGuestCheckedIn: EventHandler = (event: typeof myEvent) => {
      const { type, data, metadata } = event;

      expect(type).toBe('GuestCheckedIn');
      expect(data.guestId).toBe('123');
      expect(metadata?.correlationId).toBe('123');
    };

    messageBus.subscribe(
      handleGuestCheckedIn,
      'GuestCheckedIn',
      'ChargeRecorded',
      'GuestCheckedOut',
      'GuestCheckoutFailed',
    );

    await messageBus.publish(myEvent);
  });
});
