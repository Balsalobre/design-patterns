import IPublisher from '../publisher.interface.ts';
import IConnector from '../connector.interface.ts';

export default class SlackPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Slack
        console.log('Slack');
        console.log(content);
    }
}
