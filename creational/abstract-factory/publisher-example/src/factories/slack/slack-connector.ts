import IConnector from '../connector.interface.ts';

export default class SlackConnector implements IConnector {
    open(): void {
        // Logic to make a valid connection
    }
    close(): void {
        // Logic to close the current connection
    }
}
