
import { Person } from "../model/person.ts";
import { IConnection } from './entities/conexion.interface.ts';
import { PersonDAO } from './entities/personDAO.ts';

export class PersonDAOImpl implements PersonDAO {
	private _conexion!: IConnection;

  // constructor(private _conexion: IConnection) {}

  showName(): void {
    throw new Error('Method not implemented yet!')
  }

  get connection(): IConnection{
    return this._conexion;
  };

  set connection(conexion: IConnection) {
    this._conexion = conexion;
  };

  listAll(): Person[] {
    this.connection.connect();
    console.log('Listing persons...');
    return [];
  }
	
	getById(id: number): Person {
		const somePerson = new Person(+(`432${id}`), 'Sandra');
		return somePerson;
	};
	
	registry(person: Person): void {
		console.log(`${person.name} has been registered`);
	};

	update(id: number, person: Person): void {
		console.log(`${person.name} with id ${id} has been updated`);
	}

	remove(id: number): void {
		console.log(`Person with id ${id} has been removed`);
	}
}
