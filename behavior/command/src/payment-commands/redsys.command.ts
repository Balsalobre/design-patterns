import { ICommand, PaymentStatus } from '../command.interface.ts';
import { CreditCardDto } from "./dto/credit-card.dto.ts";

export class RedsysCommand implements ICommand {
  private readonly _providerName = 'Redsys';
  private _paymentStatus!: PaymentStatus;

  constructor(private readonly creditCardDefinition: CreditCardDto) {}

  get providerName(): string {
    return this._providerName;
  }

  get paymentStatus(): PaymentStatus {
    return this._paymentStatus;
  }

  set paymentStatus(paymentStatus: PaymentStatus) {
    this._paymentStatus = paymentStatus;
  }

  handle(): void {
    console.log(`${this.providerName} has been triggered...`);
    // some more code...
    this.paymentStatus = 'failed';
  }
}
