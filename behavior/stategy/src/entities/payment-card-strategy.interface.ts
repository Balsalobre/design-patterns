import { PaymentStrategy } from './payment-strategy.interface.ts';

export interface PaymentCardStrategy extends PaymentStrategy {
  cardNumber: string;
  cvv: string;
}
