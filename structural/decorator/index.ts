import { Customer } from './src/customer.ts';
import { Product } from './src/product.ts';
import { BasePrice } from './src/base-price.ts';
import { SpecialPriceDecorator } from './src/decorators/special-price.decorator.ts';
import { VipCustomerDecorator } from './src/decorators/vip-customer.decorator.ts';

const { isFirstBuy, type } = new Customer('Carlos', true, 'VIP');
const product = new Product('Guitara Suhr Classic', 2500);

let discount = new BasePrice();

if (isFirstBuy) {
  discount = new SpecialPriceDecorator(discount);
}

if (type === 'VIP') {
  discount = new VipCustomerDecorator(discount);
}

product.setSpecialPriceAndDiscount(discount.calculate(product.price));

console.log(product);

// SpecialPriceDecorator & VipCustomerDecorator pueden asignarse a la variable discount porque implementan la misma interfaz
