import { ShoppingCart } from "./core/shopping-cart";
import { CartInvoker } from "./core/cart-invoker";
import { AddProductCommand, ApplyDiscountCommand } from "./commands";

// 1. Inicializar componentes
const cart = new ShoppingCart();
const invoker = new CartInvoker();

console.log("---------------------- Inicio de Operaciones ----------------------\n");

// 2. El cliente crea las peticiones
const addLaptop = new AddProductCommand(cart, "MacBook Pro M3");
const applyHolidaySale = new ApplyDiscountCommand(cart, 20);

// 3. El invocador gestiona la ejecución
invoker.dispatch(addLaptop);
invoker.dispatch(applyHolidaySale);

console.log("\n\n-------------------------- Estado Actual --------------------------\n");
console.log(`Items: ${cart.items}, Descuento: ${cart.discount}%`);

// 4. Probar Deshacer
console.log("\n\n---------------------- Reversión de Cambios ----------------------\n");
invoker.undo(); // Deshace el descuento
invoker.undo(); // Deshace el producto

console.log("\n\n-------------------------- Estado Final --------------------------\n");
console.log(`Items: [${cart.items}], Descuento: ${cart.discount}%`);

console.log("\n------------------------------------------------------------------");