type CreditCardType = 'visa' | 'mastercard' | 'americanexpress';

export class CreditCardDto {
  constructor(
    private readonly cardType: CreditCardType,
    private readonly cardCustomerFullName: string,
    private readonly cardNumber: string,
    private readonly cardCcv: string,
    private readonly transactionAmount: number
  ){}
}