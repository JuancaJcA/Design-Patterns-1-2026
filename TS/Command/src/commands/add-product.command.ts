import { Command } from "../core/command.interface";
import { ShoppingCart } from "../core/shopping-cart";

export class AddProductCommand implements Command {
  constructor(
    //Receiver llama a ShoppingCart
    private receiver: ShoppingCart,
    private productName: string,
  ) {}

  execute(): void {
    this.receiver.addProduct(this.productName);
  }

  undo(): void {
    this.receiver.removeProduct(this.productName);
  }
}