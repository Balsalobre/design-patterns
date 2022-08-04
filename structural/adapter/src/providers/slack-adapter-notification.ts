import INotification from './notification.interface.ts';
import { SlackNotification } from './slack-notification.ts';

export class SlackAdapterNotification implements INotification {
    constructor(private slackNotification: SlackNotification) { }

    public post(title: string, message: string): void {
        this.slackNotification.send('general', title, message);
    }
}
