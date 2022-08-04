import INotification from './notification.interface.ts';

export class FacebookNotification implements INotification {
    public post(title: string, message: string): void {
        console.log(`Sending ${title} - ${message} - Facebook`);
    }
}
