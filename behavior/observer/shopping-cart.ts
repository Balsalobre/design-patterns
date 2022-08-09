import { Subject } from './src/entities/subject.abstract.ts';

let orderNumber = 1;

export class CartItem {
  constructor(
    public id: number,
    public name: string,
    public quantity: number,
    public unitPrice: number
  ) {}
}

export class Order {
  public readonly id: string;

  constructor(
    public readonly userId: number,
    public readonly userFirstName: string,
    public readonly items: CartItem[]
  ) {
    const now = new Date();
    this.id = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}${now
      .getDate()
      .toString()
      .padStart(2, '0')}${orderNumber.toString().padStart(4, '0')}`;

    orderNumber++;
  }
}

export class ShoppingCart extends Subject<Order> {
  constructor(private userId: number, private userFirstName: string) {
    super();
  }

  private readonly _items: CartItem[] = [];

  get items(): CartItem[] {
    return this._items;
  }

  add(item: CartItem) {
    const CartItem = this._items.find((x) => x.id === item.id);

    if (CartItem) {
      throw new Error(
        'The product has already been added to the shopping cart.'
      );
    } else {
      this._items.push(item);
    }
  }

  purchase() {
    // your business logic goes here ..
    const order = new Order(this.userId, this.userFirstName, this._items);
    this.notify(order);
  }
}
