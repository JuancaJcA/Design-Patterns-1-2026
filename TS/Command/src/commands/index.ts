/**
 * BARREL EXPORT:
 * Este archivo actúa como una "ventanilla única" para la carpeta.
 * Permite que otros archivos importen múltiples comandos desde una sola ruta.
 * Ejemplo: import { AddProductCommand, ApplyDiscountCommand } from "./commands";
 */

export * from "./add-product.command";
export * from "./apply-discount.command";