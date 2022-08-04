interface ICustomer {
  name: string;
  type: string;
  isFirstBuy: boolean;
}

export class Customer implements ICustomer { 
  constructor(private _name: string, private _isFirstBuy: boolean, private _type: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get isFirstBuy(): boolean {
    return this._isFirstBuy;
  }

  set isFirstBuy(value: boolean) {
    this._isFirstBuy = value;
  }
}
