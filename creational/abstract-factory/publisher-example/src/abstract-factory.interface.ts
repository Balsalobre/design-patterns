import IConnector from './factories/connector.interface.ts';
import IPublisher from './factories/publisher.interface.ts';

export default interface IAbstractFactory {
    getConnector(): IConnector;
    getPublisher(connector: IConnector): IPublisher;
}