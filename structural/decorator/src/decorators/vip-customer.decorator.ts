import { IDiscount } from "../interfaces/discount.interface.ts";

export class VipCustomerDecorator implements IDiscount {
  private readonly discountAmount: number = 0.02;

  constructor(private readonly decorator: IDiscount) {}

  calculate(input: number): number {
    console.log(`${this.constructor.name} discount applied.`);
    input = input * (1 - this.discountAmount);
    return this.decorator.calculate(input);
  }
}
