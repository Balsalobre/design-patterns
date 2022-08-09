import { describe, it } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import { assertEquals } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import { SmsObserver } from './src/observers/sms.observer.ts';
import { EmailObserver } from './src/observers/email.observer.ts';
import { CartItem, ShoppingCart } from './shopping-cart.ts';

describe('Shopping Cart', () => {
  it('Success case', () => {
    const smsObserver = new SmsObserver();
    const emailObserver = new EmailObserver();
    const shoppingCart = new ShoppingCart(1, 'Eduardo');

    shoppingCart.attach(smsObserver);
    shoppingCart.attach(emailObserver);

    shoppingCart.add(new CartItem(1, 'Spanish flamenco guitar', 2, 800));
    shoppingCart.add(new CartItem(2, 'Flamenco guitar courses', 1, 200));
    shoppingCart.add(new CartItem(3, 'Capo', 2, 50));
    shoppingCart.purchase();

    assertEquals(shoppingCart.items.length, 3);
  });
});
