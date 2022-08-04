import { describe, it, beforeEach } from 'https://deno.land/std@0.148.0/testing/bdd.ts';
import { assert } from 'https://deno.land/std@0.148.0/testing/asserts.ts';

import { Product } from './src/product.ts';
import { BasePrice } from './src/base-price.ts';
import { SpecialPriceDecorator } from './src/decorators/special-price.decorator.ts';
import { VipCustomerDecorator } from './src/decorators/vip-customer.decorator.ts';

let product: Product;
let specialPrice: BasePrice;

beforeEach(() => {
  product = new Product('Guitara Suhr Classic', 2500);
  specialPrice = new BasePrice();
});

describe('Product price', () => {
  it('Base price', () => {
    product.setSpecialPriceAndDiscount(specialPrice.calculate(product.price));
    assert(product.specialPrice === 0);
  });

  it('Special price discount', () => {
    specialPrice = new SpecialPriceDecorator(specialPrice);
    product.setSpecialPriceAndDiscount(specialPrice.calculate(product.price));
    assert(product.price > product.specialPrice);
  });

  it('VIP customer discount', () => {
    specialPrice = new VipCustomerDecorator(specialPrice);
    product.setSpecialPriceAndDiscount(specialPrice.calculate(product.price));
    assert(product.price > product.specialPrice);
  });

  it('Special price and vip customer discount', () => {
    specialPrice = new SpecialPriceDecorator(specialPrice);
    specialPrice = new VipCustomerDecorator(specialPrice);
    product.setSpecialPriceAndDiscount(specialPrice.calculate(product.price));
    assert(product.price > product.specialPrice);
  });
});
