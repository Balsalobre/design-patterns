import { PaymentCardStrategy } from './entities/payment-card-strategy.interface.ts';
import { PaymentResponse } from './entities/payment-strategy.interface.ts';

export class MastercardStrategy implements PaymentCardStrategy {
  constructor(public cardNumber: string, public cvv: string) { }

  execute(userId: string, amount: number): PaymentResponse {
    console.log(`Masterdcard approved the transaction for ${userId} in the amount of ${amount} €.`);
    return { isSuccess: true };
  }
}
