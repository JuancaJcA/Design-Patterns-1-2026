import { Command } from "../core/command.interface";
import { ShoppingCart } from "../core/shopping-cart";

export class ApplyDiscountCommand implements Command {
  private previousDiscount: number = 0;

  constructor(
    //Receiver llama a ShoppingCart
    private receiver: ShoppingCart,
    private discountValue: number,
  ) {}

  execute(): void {
    this.previousDiscount = this.receiver.discount;
    this.receiver.applyDiscount(this.discountValue);
  }

  undo(): void {
    this.receiver.applyDiscount(this.previousDiscount);
  }
}