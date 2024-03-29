import { IConnection } from "./entities/conexion.interface.ts";

export class MySQLConnection implements IConnection {
	constructor(
    private _user: string,
    private _password: string,
    private _host: string
  ) {}

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

	connect(): void {
		console.log('Connecting to MySQL database...');
	}
}
