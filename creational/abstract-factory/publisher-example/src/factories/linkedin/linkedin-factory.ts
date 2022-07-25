import IAbstractFactory from '../../abstract-factory.interface.ts';
import IConnector from '../connector.interface.ts';
import IPublisher from '../publisher.interface.ts';
import LinkedinPublisher from './linkedin-publisher.ts';
import LinkedinConnector from './linkedin-connector.ts';

export default class LinkedinFactory implements IAbstractFactory {
    getConnector(): IConnector {
        return new LinkedinConnector();
    }

    getPublisher(connector: IConnector): IPublisher {
        return new LinkedinPublisher(connector);
    }
}
