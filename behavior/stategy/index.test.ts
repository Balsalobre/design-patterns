import { describe, it, beforeEach } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import { assert } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import { Checkout } from './src/checkout.ts';
import { PayPalStrategy } from './src/paypal.strategy.ts';

const checkout = new Checkout();

let userId: string, useEmail: string, amount: number;

beforeEach(() => {
  userId = 'usr-001',
  useEmail = 'eduardo@kodoti.com',
  amount = 2000;
})

describe('Strategy Pattern', () => {
  it('Successful paypal usage', () => {
    checkout.setStrategy(new PayPalStrategy(useEmail));
    const { isSuccess } = checkout.execute(userId, amount);
    assert(isSuccess);
  });
});
