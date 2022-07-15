import IPaymentMethood from "../payment-method.interface";

export default class MasterCard implements IPaymentMethood {
  get comission(): number {
    return 0.04;
  }
}
