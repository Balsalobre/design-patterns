import { Checkout } from './src/checkout.ts';
import { MastercardStrategy } from './src/mastercard.strategy.ts';
import { PayPalStrategy } from './src/paypal.strategy.ts';
import { VisaStrategy } from './src/visa.strategy.ts';

const checkout = new Checkout();

let paymentMethod = 'paypal';
const userId = 'usr-001',
  useEmail = 'balsalobre@gmail.com',
  cardNumber = '000-000-000-000',
  cvv = '123',
  amount = 4000;

if (paymentMethod === 'paypal') {
  checkout.setStrategy(new PayPalStrategy(useEmail));
}

if (paymentMethod === 'visa') {
  checkout.setStrategy(new VisaStrategy(cardNumber, cvv));
}

if (paymentMethod === 'mastercard') {
  checkout.setStrategy(new MastercardStrategy(cardNumber, cvv));
}

checkout.execute(userId, amount);
