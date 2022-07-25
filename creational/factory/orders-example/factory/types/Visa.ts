import IPaymentMethood from '../payment-method.interface.ts';

export default class Visa implements IPaymentMethood {
  get commission(): number {
    return 0.05;
  }
}
