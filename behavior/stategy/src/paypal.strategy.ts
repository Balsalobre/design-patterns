import { PaymentGatewayStrategy } from './entities/payment-gateway-strategy.interface.ts';
import { PaymentResponse } from './entities/payment-strategy.interface.ts';

export class PayPalStrategy implements PaymentGatewayStrategy {
  constructor(public userEmail: string) { }

  execute(userId: string, amount: number): PaymentResponse {
    console.log(`PayPal approved the transaction for ${userId} in the amount of ${amount} €.`);
    return { isSuccess: true };
  }
}
