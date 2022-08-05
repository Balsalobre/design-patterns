import { IConnection } from "./entities/conexion.interface.ts";

export class PostgreConnection implements IConnection {
	constructor(
    private _user: string,
    private _password: string,
    private _host: string
  ) {}

	connect(): void {
		console.log('Connecting to Postgre database...');
	}
}