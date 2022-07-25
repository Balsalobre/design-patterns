import IPublisher from '../publisher.interface.ts';
import IConnector from '../connector.interface.ts';

export default class FacebookPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Facebook
        console.log('Facebook');
        console.log(content);
    }
}