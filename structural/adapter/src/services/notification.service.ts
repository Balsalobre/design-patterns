
import INotification from '../providers/notification.interface.ts';

export class NotificationService {
    constructor(private providers: INotification[]) { }

    public post(title: string, message: string): void {
        this.providers.map(provider => provider.post(title, message));
    }
}
