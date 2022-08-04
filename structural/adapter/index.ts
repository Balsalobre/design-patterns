import INotification from './src/providers/notification.interface.ts';
import { NotificationService } from './src/services/notification.service.ts';
import { FacebookNotification } from './src/providers/facebook-notification.ts';
import { SlackAdapterNotification } from './src/providers/slack-adapter-notification.ts';
import { SlackNotification } from './src/providers/slack-notification.ts';

const providers: INotification[] = [
    new FacebookNotification(),
    new SlackAdapterNotification(new SlackNotification()) //adapter
];

const notificationService = new NotificationService(providers);
notificationService.post('Nuevo curso', '25% descuentos a los 10 primeros en inscribirse.');