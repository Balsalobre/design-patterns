import IAbstractFactory from '../../abstract-factory.interface.ts';
import IConnector from '../connector.interface.ts';
import IPublisher from '../publisher.interface.ts';
import SlackPublisher from './slack-publisher.ts';
import SlackConnector from './slack-connector.ts';

export default class SlackFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new SlackConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new SlackPublisher(connector);
    }
}