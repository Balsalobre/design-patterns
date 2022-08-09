
import { PaymentStrategy } from './payment-strategy.interface.ts';

export interface PaymentGatewayStrategy extends PaymentStrategy {
  userEmail: string;
}
