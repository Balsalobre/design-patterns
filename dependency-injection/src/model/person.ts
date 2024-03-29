export class Person {
  constructor(private _id: number, private _name: string){}

	get id(): number {
		return this._id;
	}

	set id(id: number) {
		this.id = id;
	}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}