import { Observer } from "./observer.interface.ts";

export abstract class Subject<T> {
  private observers: Observer<T>[] = [];

  attach(observer: Observer<T>): void {
    if(!this.observers.some(x => x === observer)) {
      this.observers.push(observer);
    } else {
      throw new Error('Observer has already been attached.');
    }
  }

  detach(observer: Observer<T>): void {
    this.observers.filter(x => x !== observer);
  }

  protected notify(message: T): void {
    this.observers.map(x => x.update(message));
  }
}