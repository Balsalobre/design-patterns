import { EmailObserver } from './src/observers/email.observer.ts';
import { SmsObserver } from './src/observers/sms.observer.ts';
import { CartItem, ShoppingCart } from './shopping-cart.ts';

// Observers
const smsObserver = new SmsObserver();
const emailObserver = new EmailObserver()

// Subject
const shoppingCart = new ShoppingCart(1, 'Carlos');

shoppingCart.attach(smsObserver);
shoppingCart.attach(emailObserver);

shoppingCart.add(new CartItem(1, 'Spanish flamenco guitar', 2, 800));
shoppingCart.add(new CartItem(2, 'Flamenco guitar courses', 1, 200));
shoppingCart.add(new CartItem(3, 'Capo', 2, 50));

shoppingCart.purchase();
