export class ShoppingCart {
  public items: string[] = [];
  public discount: number = 0;

  addProduct(item: string): void {
    this.items.push(item);
    console.log(`[Receptor] Carrito: Agregado "${item}". Total items: ${this.items.length}`);
  }

  removeProduct(item: string): void {
    this.items = this.items.filter((i) => i !== item);
    console.log(`[Receptor] Carrito: Eliminado "${item}".`);
  }

  applyDiscount(percent: number): void {
    this.discount = percent;
    console.log(`[Receptor] Carrito: Descuento aplicado: ${percent}%`);
  }
}