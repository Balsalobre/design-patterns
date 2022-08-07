import { CreditCardDto } from "./src/payment-commands/dto/credit-card.dto.ts";
import { PayPalCommand } from "./src/payment-commands/paypal.command.ts";
import { RedsysCommand } from "./src/payment-commands/redsys.command.ts";
import { StripeCommand } from "./src/payment-commands/stripe.command.ts";
import { PaymentMethodHandler } from "./src/payment-method.handler.ts";

const creditCard = new CreditCardDto(
  'visa',
  'Carlos Balsalobre Orenes',
  'xxxx-xxxx-xxxx-xxxx',
  'xxx',
  300.00
);

const paymentMethodHandler = new PaymentMethodHandler();

// example 1
paymentMethodHandler.process(new PayPalCommand(creditCard));
paymentMethodHandler.process(new StripeCommand(creditCard));

// example 2
paymentMethodHandler.faceToProcess([
  new RedsysCommand(creditCard),
  new StripeCommand(creditCard),
  new PayPalCommand(creditCard)
]);