import { assert, assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import Order from './order.ts'
import PaymentType from './enums/payment-type.ts'
import Visa from "./factory/types/Visa.ts";
import MasterCard from "./factory/types/MasterCard.ts";
import PayPal from "./factory/types/PayPal.ts";

const order1 = new Order(PaymentType.Visa, 100),
      order2 = new Order(PaymentType.MasterCard, 100),
      order3 = new Order(PaymentType.PayPal, 100);

order1.create();
order2.create();
order3.create();

Deno.test('Order must be paid by Visa', () => {
  assert(order1.paymentType instanceof Visa);
});

Deno.test('Order commission must be 5', () => {
  assertEquals(order1.commission, 5);
});

Deno.test('Order must be paid by MasterCard', () => {
  assert(order2.paymentType instanceof MasterCard);
});

Deno.test('Order commission must be 4', () => {
  assertEquals(order2.commission, 4);
});

Deno.test('Order must be paid by PayPal', () => {
  assert(order3.paymentType instanceof PayPal);
});

Deno.test('Order commission must be 6', () => {
  assertEquals(order3.commission, 6);
});