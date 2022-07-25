import { assert } from 'https://deno.land/std@0.148.0/testing/asserts.ts';
import MyConfiguration from './my-configuration.ts';

const config = MyConfiguration.getInstance();

Deno.test('Object should be not null', () => {
  assert(config !== null);
});

Deno.test('Object should be equal', () => {
  const secondConfig = MyConfiguration.getInstance();
  assert(config instanceof MyConfiguration && secondConfig instanceof MyConfiguration);
  assert(config === secondConfig);
});

Deno.test('Environment property should be development', () => {
  assert(config.environment === 'development');
});