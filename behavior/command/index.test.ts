import { describe, it, beforeEach } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import {  assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import { CreditCardDto } from "./src/payment-commands/dto/credit-card.dto.ts";
import { PaymentMethodHandler } from "./src/payment-method.handler.ts";
import { RedsysCommand } from './src/payment-commands/redsys.command.ts';
import { StripeCommand } from "./src/payment-commands/stripe.command.ts";

let creditCard: CreditCardDto;
let paymentMethodHandler: PaymentMethodHandler;

beforeEach(() => {
  creditCard = new CreditCardDto(
    'visa',
    'Carlos Balsalobre Orenes',
    'xxx-xxx-xxx-xxx',
    'xxx',
    300.00
  );
  paymentMethodHandler = new PaymentMethodHandler();
})

describe('Payment Method Handler', () => {
  it('Payment method registered correctly', () => {
    const redsysCommand = new RedsysCommand(creditCard);
    assertEquals(redsysCommand.providerName, 'Redsys');
  });

  it('Payment error', () => {
    const redsysCommand = new RedsysCommand(creditCard);
    paymentMethodHandler.process((redsysCommand));
    assertEquals(redsysCommand.paymentStatus, 'failed');
  });

  it('Payment success', () => {
    const stripeCommand = new StripeCommand(creditCard);
    paymentMethodHandler.process((stripeCommand));
    assertEquals(stripeCommand.paymentStatus, 'success');
  });
}); 