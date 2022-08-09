import { Order } from "../../shopping-cart.ts";
import { Observer } from "../entities/observer.interface.ts";

export class SmsObserver implements Observer<Order> {
  update(message: Order): void {
    const total = message.items
      .map(item => item.quantity * item.unitPrice)
      .reduce((prev, curr) => prev + curr);
    console.log(`SMS: ${message.userFirstName}, your order ${message.id} by the amount of ${total}€ has been approved.`);
  }
}
