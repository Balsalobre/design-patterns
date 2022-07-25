import IPaymentMethood from '../payment-method.interface.ts';

export default class PayPal implements IPaymentMethood {
  get commission(): number {
    return 0.06;
  }
}
