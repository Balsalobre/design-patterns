import { IDiscount } from "../interfaces/discount.interface.ts";

export class SpecialPriceDecorator implements IDiscount {
  private readonly discountAmount: number = 0.04;
  
  constructor(private readonly decorator: IDiscount) {}

  calculate(input: number): number {
    console.log(`${this.constructor.name} discount applied.`);
    input = input * (1 - this.discountAmount);
    return this.decorator.calculate(input);
  }
}
