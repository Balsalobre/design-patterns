import PaymentType from './enums/payment-type.ts';
import IPaymentMethood from './factory/payment-method.interface.ts';

export default class Order {
  public paymentType: IPaymentMethood;
}