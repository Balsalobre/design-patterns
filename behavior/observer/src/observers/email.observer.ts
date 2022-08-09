import { Order } from "../../shopping-cart.ts";
import { Observer } from "../entities/observer.interface.ts";

export class EmailObserver implements Observer<Order> {
  update(message: Order): void {
    console.log(`EMAIL: Your order #${message.id} has been approved.`);
  }
}
