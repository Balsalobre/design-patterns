export interface CRUD<T> {
	listAll: () => Array<T>;
	getById: (id: number) => T;
	registry: (t: T) =>  void;
	update: (id: number, t: T) =>  void;
	remove: (id: number) =>  void;
}
