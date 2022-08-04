interface IProduct {
  name: string;
  price: number;
  specialPrice: number;
  discount: number;
  setSpecialPriceAndDiscount(input: number): void;
}

export class Product implements IProduct {
  private _specialPrice = 0;
  private _discount = 0;

  constructor(private _name: string, private _price: number) {}

  setSpecialPriceAndDiscount(input: number) {
    if (this.price > input) {
      this.specialPrice = input;
      this.discount = +(1 - this.specialPrice / this.price).toFixed(2);
    }
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get specialPrice() {
    return this._specialPrice;
  }

  set specialPrice(value) {
    this._specialPrice = value;
  }

  get discount() {
    return this._discount;
  }

  set discount(value) {
    this._discount = value;
  }
}
