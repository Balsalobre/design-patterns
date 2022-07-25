import IPaymentMethood from '../payment-method.interface.ts';

export default class MasterCard implements IPaymentMethood {
  get commission(): number {
    return 0.04;
  }
}
