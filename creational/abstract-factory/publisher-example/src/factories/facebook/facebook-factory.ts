import IAbstractFactory from '../../abstract-factory.interface.ts';
import IConnector from '../connector.interface.ts';
import FacebookConnector from './facebook-connector.ts';
import IPublisher from '../publisher.interface.ts';
import FacebookPublisher from './facebook-publisher.ts';

export default class FacebookFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new FacebookConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new FacebookPublisher(connector);
    }
}
