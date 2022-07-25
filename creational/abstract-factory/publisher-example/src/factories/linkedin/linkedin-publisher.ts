import IPublisher from '../publisher.interface.ts';
import IConnector from '../connector.interface.ts';

export default class LinkedinPublisher implements IPublisher {
    constructor(private connector: IConnector) { }

    publish(content: string): void {
        // Your logic to publish on Linkedin
        console.log('Linkedin');
        console.log(content);
    }
}
