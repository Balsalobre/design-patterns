import config from './config.json' assert { type: "json" };

export default class MyConfiguration {
  private static instance: MyConfiguration;
  private static _connectionString: string;
  private static _environment: string;
  private static _apiUrl: string;

  // Lo hacemos privado para que no sea accesible desde fuera
  private constructor() {}

  get connectionString(): string { return MyConfiguration._connectionString; }
  get environment(): string { return MyConfiguration._environment; }
  get apiUrl(): string { return MyConfiguration._apiUrl; }

  private static initialize(): void {
    this._connectionString = config.connectionString;
    this._environment = config.environment;
    this._apiUrl = config.apiUrl;
  }

  static getInstance(): MyConfiguration {
    if(!this.instance) {
      this.initialize();
      this.instance = new MyConfiguration();
    }

    return this.instance;
  }
  
}