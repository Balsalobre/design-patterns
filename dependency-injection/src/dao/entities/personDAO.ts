import { Person } from "../../model/person.ts";
import { IConnection } from "./conexion.interface.ts";
import { CRUD } from "./crud.interface.ts";

export interface PersonDAO extends CRUD<Person>{
	connection: IConnection;
	showName: () => void;
}
