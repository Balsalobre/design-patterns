import { assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import INotification from './src/providers/notification.interface.ts';
import { NotificationService } from './src/services/notification.service.ts';
import { FacebookNotification } from './src/providers/facebook-notification.ts';
import { SlackAdapterNotification } from './src/providers/slack-adapter-notification.ts';
import { SlackNotification } from './src/providers/slack-notification.ts';

const providers: INotification[] = [
    new FacebookNotification(),
    new SlackAdapterNotification(new SlackNotification()) //adapter
];

Deno.test('Are providers compatible?', () => {
  providers.map(provider => assertEquals(typeof provider.post, 'function'));
});