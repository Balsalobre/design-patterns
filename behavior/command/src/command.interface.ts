export type PaymentStatus = 'success' | 'failed';

export interface ICommand {
  providerName: string;
  paymentStatus: PaymentStatus;
  handle(): void;
}
