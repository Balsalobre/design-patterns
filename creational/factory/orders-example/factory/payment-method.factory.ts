import PaymentType from '../enums/payment-type.ts';
import IPaymentMethood from './payment-method.interface.ts';
import MasterCard from './types/MasterCard.ts';
import PayPal from './types/PayPal.ts';
import Visa from './types/Visa.ts'

export default class PaymentMethodFactory {
  public static createPaymentType(type: PaymentType): IPaymentMethood {
    if (type === PaymentType.MasterCard) {
      return new MasterCard();
    }
    if (type === PaymentType.PayPal) {
      return new PayPal();
    }
    if (type === PaymentType.Visa) {
      return new Visa();
    }

    throw new Error('Invalid payment method type.');
  }
}