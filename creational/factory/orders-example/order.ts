import PaymentType from './enums/payment-type.ts';
import IPaymentMethood from './factory/payment-method.interface.ts';
import PaymentMethodFactory from './factory/payment-method.factory.ts';

// Gestión de ordenes de compra --> calcula comisión
export default class Order {
  public paymentType?: IPaymentMethood;
  public commission = 0;

  constructor(private type: PaymentType, public amount: number){}

  public create(): void {
    // set payment type
    this.paymentType = PaymentMethodFactory.createPaymentType(this.type);

    // calculate commission
    this.commission = this.paymentType.commission * this.amount;
  }
}