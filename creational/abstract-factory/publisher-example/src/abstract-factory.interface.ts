import IConnector from './factories/connector.interface.ts';
import IPublisher from './factories/publisher.interface.ts';

// Fábrica de fábricas
export default interface IAbstractFactory {
    getConnector(): IConnector;
    getPublisher(connector: IConnector): IPublisher;
}